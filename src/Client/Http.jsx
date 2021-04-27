class HttpException extends Error {
  constructor(res, url) {
    super(`Error while loading ${url}: ${res.status} ${res.statusText}`);
    this.status = res.status;
  }
}

function checkResult(res, url) {
  if (!res.ok) {
    throw new HttpException(res, url);
  }
}

export async function fetchJson(url) {
  const res = await fetch(url);
  checkResult(res, url);
  return await res.json();
}

export async function postJson(url, json) {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function putJson(url, json) {
  await fetch(url, {
    method: "PUT",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
