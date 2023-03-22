function friendlyError(error) {
  return {
    name: error.name,
    message: error.message,
    method: error.config.method,
    url: error.config.url,
    code: error.code,
    status: error.response.status || error.request.status,
    statusText: error.response.statusText || error.request.statusText,
  };
}

export default friendlyError;
