export default async function handler(req, res) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  // GET = la app pregunta si Drive está configurado
  if (req.method === 'GET') {
    return res.status(200).json({ configured: Boolean(scriptUrl) });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Método no permitido' });
  }

  if (!scriptUrl) {
    return res.status(500).json({ ok: false, error: 'GOOGLE_SCRIPT_URL no configurada' });
  }

  const { nombre, fecha, documento, contenido } = req.body || {};
  if (!nombre || !contenido) {
    return res.status(400).json({ ok: false, error: 'Faltan datos' });
  }

  try {
    const r = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ nombre, fecha, documento, contenido }),
      redirect: 'follow',
    });

    const text = await r.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { ok: false, error: 'Respuesta inválida del script' }; }

    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ ok: false, error: 'No se pudo conectar con Google Drive' });
  }
}
