import React, { useState } from 'react';

export default function Page() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function analyze() {
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch(`/nextapi/analyze?url=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error('Error analyzing URL');
      const data = await res.json();
      setResult(data);
    } catch(e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>SEO Analyzer</h1>
      <input
        type="text"
        value={url}
        placeholder="Enter URL to analyze"
        onChange={e => setUrl(e.target.value)}
        style={{ width: '400px', marginRight: '1rem' }}
      />
      <button onClick={analyze} disabled={loading}>Analyze</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
