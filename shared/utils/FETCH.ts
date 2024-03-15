const uri: string = process.env.BASE_URL as string
console.log('uri: ', uri)

const get = async (url: string, params?: any, headers?: any) => {
  console.log('link: ', uri.concat(url, params ?? ''))
  try {
    const response = await fetch(uri.concat(url, params ?? ''), {
      method: 'GET',
      headers: headers
        ? {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        }
        : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    })

    try {
      const responseJSON = await response.json()

      if (response.status >= 200 && response.status <= 299) {
        return responseJSON

      } else {
        Promise.reject({ status: response.status, error: true, ...responseJSON })
      }

    } catch (error) {
      Promise.reject({ error: true, type: 'get', message: error, response: 'JSON can not be parsed' })
    }

  } catch (error) {
    Promise.reject({ error: true, message: error })
  }
}

const post = async (url: string, body: any, headers?: any, params?: string) => {
  console.log('link: ', uri.concat(url, params ?? ''))
  try {
    const response = await fetch(uri.concat(url, params ?? ''), {
      method: 'POST',
      headers: headers
        ? {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        }
        : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(body)
    })

    try {
      const responseJSON = await response.json()

      if (response.status >= 200 && response.status <= 299) {
        return responseJSON
      } else {
        Promise.reject({ status: response.status, error: true, message: 'There is a server problem', ...responseJSON })
      }

    } catch (error) {
      Promise.reject({ error: true, type: 'post', status: response.status, message: error, response: 'JSON can not be parsed' })
    }

  } catch (error) {
    Promise.reject({ error: true, message: error })
  }
}

const put = async (url: string, body: any, params?: any, headers?: any) => {
  try {
    const response = await fetch(uri.concat(url, params ?? ''), {
      method: 'PUT',
      headers: headers
        ? {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        }
        : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(body)
    })

    const responseJSON = await response.json()

    if (response.status >= 200 && response.status <= 299) {
      try {
        return responseJSON

      } catch (error) {
        return Promise.reject({ status: response.status, error: true, message: error, ...responseJSON })
      }

    } else {
      try {
        return Promise.reject({ error: true, type: 'put', status: response.status, ...responseJSON })

      } catch (error: any) {
        return Promise.reject({ status: response.status, error: true, type: 'put', ...error, response: 'This is not a JSON' })
      }
    }

  } catch (error: any) {
    return Promise.reject({ error: true, type: 'put', message: error.message })
  }
}

const patch = async (url: string, params: any, body: any, headers?: any) => {
  try {
    const response = await fetch(uri.concat(url, params ?? ''), {
      method: 'PATCH',
      headers: headers
        ? {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        }
        : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(body)
    })
    const responseJSON = await response.json()

    if (response.status >= 200 && response.status <= 299) {
      try {
        return responseJSON

      } catch (error) {
        Promise.reject({ status: response.status, error: true, message: error, ...responseJSON })
      }

    } else {
      try {
        return Promise.reject({ error: true, type: 'patch', status: response.status, ...responseJSON })

      } catch (error: any) {
        return Promise.reject({ status: response.status, error: true, type: 'patch', ...error, response: 'This is not a JSON' })
      }
    }

  } catch (error: any) {
    return Promise.reject({ error: true, type: 'patch', message: error.message })
  }
}

export { get, post, put, patch } 