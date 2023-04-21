//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import {
  mergeMap as _observableMergeMap,
  catchError as _observableCatch,
} from 'rxjs/operators';
import {
  Observable,
  throwError as _observableThrow,
  of as _observableOf,
} from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpResponseBase,
} from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class BookClient {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string
  ) {
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  getAllBooks(): Observable<FileResponse | null> {
    let url_ = this.baseUrl + '/api/Book';
    url_ = url_.replace(/[?&]$/, '');

    let options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        Accept: 'application/octet-stream',
      }),
    };

    return this.http
      .request('get', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processGetAllBooks(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processGetAllBooks(response_ as any);
            } catch (e) {
              return _observableThrow(
                e
              ) as any as Observable<FileResponse | null>;
            }
          } else
            return _observableThrow(
              response_
            ) as any as Observable<FileResponse | null>;
        })
      );
  }

  protected processGetAllBooks(
    response: HttpResponseBase
  ): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (response as any).error instanceof Blob
        ? (response as any).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers
        ? response.headers.get('content-disposition')
        : undefined;
      let fileNameMatch = contentDisposition
        ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(
            contentDisposition
          )
        : undefined;
      let fileName =
        fileNameMatch && fileNameMatch.length > 1
          ? fileNameMatch[3] || fileNameMatch[2]
          : undefined;
      if (fileName) {
        fileName = decodeURIComponent(fileName);
      } else {
        fileNameMatch = contentDisposition
          ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition)
          : undefined;
        fileName =
          fileNameMatch && fileNameMatch.length > 1
            ? fileNameMatch[1]
            : undefined;
      }
      return _observableOf({
        fileName: fileName,
        data: responseBlob as any,
        status: status,
        headers: _headers,
      });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap((_responseText) => {
          return throwException(
            'An unexpected server error occurred.',
            status,
            _responseText,
            _headers
          );
        })
      );
    }
    return _observableOf<FileResponse | null>(null as any);
  }

  addBook(vm: BookVM): Observable<FileResponse | null> {
    let url_ = this.baseUrl + '/api/Book';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(vm);

    let options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/octet-stream',
      }),
    };

    return this.http
      .request('post', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processAddBook(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processAddBook(response_ as any);
            } catch (e) {
              return _observableThrow(
                e
              ) as any as Observable<FileResponse | null>;
            }
          } else
            return _observableThrow(
              response_
            ) as any as Observable<FileResponse | null>;
        })
      );
  }

  protected processAddBook(
    response: HttpResponseBase
  ): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (response as any).error instanceof Blob
        ? (response as any).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers
        ? response.headers.get('content-disposition')
        : undefined;
      let fileNameMatch = contentDisposition
        ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(
            contentDisposition
          )
        : undefined;
      let fileName =
        fileNameMatch && fileNameMatch.length > 1
          ? fileNameMatch[3] || fileNameMatch[2]
          : undefined;
      if (fileName) {
        fileName = decodeURIComponent(fileName);
      } else {
        fileNameMatch = contentDisposition
          ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition)
          : undefined;
        fileName =
          fileNameMatch && fileNameMatch.length > 1
            ? fileNameMatch[1]
            : undefined;
      }
      return _observableOf({
        fileName: fileName,
        data: responseBlob as any,
        status: status,
        headers: _headers,
      });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap((_responseText) => {
          return throwException(
            'An unexpected server error occurred.',
            status,
            _responseText,
            _headers
          );
        })
      );
    }
    return _observableOf<FileResponse | null>(null as any);
  }

  updateBook(
    id: number | undefined,
    bookVM: BookVM
  ): Observable<FileResponse | null> {
    let url_ = this.baseUrl + '/api/Book?';
    if (id === null) throw new Error("The parameter 'id' cannot be null.");
    else if (id !== undefined)
      url_ += 'id=' + encodeURIComponent('' + id) + '&';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(bookVM);

    let options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/octet-stream',
      }),
    };

    return this.http
      .request('put', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processUpdateBook(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processUpdateBook(response_ as any);
            } catch (e) {
              return _observableThrow(
                e
              ) as any as Observable<FileResponse | null>;
            }
          } else
            return _observableThrow(
              response_
            ) as any as Observable<FileResponse | null>;
        })
      );
  }

  protected processUpdateBook(
    response: HttpResponseBase
  ): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (response as any).error instanceof Blob
        ? (response as any).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers
        ? response.headers.get('content-disposition')
        : undefined;
      let fileNameMatch = contentDisposition
        ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(
            contentDisposition
          )
        : undefined;
      let fileName =
        fileNameMatch && fileNameMatch.length > 1
          ? fileNameMatch[3] || fileNameMatch[2]
          : undefined;
      if (fileName) {
        fileName = decodeURIComponent(fileName);
      } else {
        fileNameMatch = contentDisposition
          ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition)
          : undefined;
        fileName =
          fileNameMatch && fileNameMatch.length > 1
            ? fileNameMatch[1]
            : undefined;
      }
      return _observableOf({
        fileName: fileName,
        data: responseBlob as any,
        status: status,
        headers: _headers,
      });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap((_responseText) => {
          return throwException(
            'An unexpected server error occurred.',
            status,
            _responseText,
            _headers
          );
        })
      );
    }
    return _observableOf<FileResponse | null>(null as any);
  }

  deleteBook(id: number | undefined): Observable<FileResponse | null> {
    let url_ = this.baseUrl + '/api/Book?';
    if (id === null) throw new Error("The parameter 'id' cannot be null.");
    else if (id !== undefined)
      url_ += 'id=' + encodeURIComponent('' + id) + '&';
    url_ = url_.replace(/[?&]$/, '');

    let options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        Accept: 'application/octet-stream',
      }),
    };

    return this.http
      .request('delete', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processDeleteBook(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processDeleteBook(response_ as any);
            } catch (e) {
              return _observableThrow(
                e
              ) as any as Observable<FileResponse | null>;
            }
          } else
            return _observableThrow(
              response_
            ) as any as Observable<FileResponse | null>;
        })
      );
  }

  protected processDeleteBook(
    response: HttpResponseBase
  ): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (response as any).error instanceof Blob
        ? (response as any).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers
        ? response.headers.get('content-disposition')
        : undefined;
      let fileNameMatch = contentDisposition
        ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(
            contentDisposition
          )
        : undefined;
      let fileName =
        fileNameMatch && fileNameMatch.length > 1
          ? fileNameMatch[3] || fileNameMatch[2]
          : undefined;
      if (fileName) {
        fileName = decodeURIComponent(fileName);
      } else {
        fileNameMatch = contentDisposition
          ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition)
          : undefined;
        fileName =
          fileNameMatch && fileNameMatch.length > 1
            ? fileNameMatch[1]
            : undefined;
      }
      return _observableOf({
        fileName: fileName,
        data: responseBlob as any,
        status: status,
        headers: _headers,
      });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap((_responseText) => {
          return throwException(
            'An unexpected server error occurred.',
            status,
            _responseText,
            _headers
          );
        })
      );
    }
    return _observableOf<FileResponse | null>(null as any);
  }

  getBook(id: number): Observable<FileResponse | null> {
    let url_ = this.baseUrl + '/api/Book/{id}';
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent('' + id));
    url_ = url_.replace(/[?&]$/, '');

    let options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        Accept: 'application/octet-stream',
      }),
    };

    return this.http
      .request('get', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processGetBook(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processGetBook(response_ as any);
            } catch (e) {
              return _observableThrow(
                e
              ) as any as Observable<FileResponse | null>;
            }
          } else
            return _observableThrow(
              response_
            ) as any as Observable<FileResponse | null>;
        })
      );
  }

  protected processGetBook(
    response: HttpResponseBase
  ): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (response as any).error instanceof Blob
        ? (response as any).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers
        ? response.headers.get('content-disposition')
        : undefined;
      let fileNameMatch = contentDisposition
        ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(
            contentDisposition
          )
        : undefined;
      let fileName =
        fileNameMatch && fileNameMatch.length > 1
          ? fileNameMatch[3] || fileNameMatch[2]
          : undefined;
      if (fileName) {
        fileName = decodeURIComponent(fileName);
      } else {
        fileNameMatch = contentDisposition
          ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition)
          : undefined;
        fileName =
          fileNameMatch && fileNameMatch.length > 1
            ? fileNameMatch[1]
            : undefined;
      }
      return _observableOf({
        fileName: fileName,
        data: responseBlob as any,
        status: status,
        headers: _headers,
      });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap((_responseText) => {
          return throwException(
            'An unexpected server error occurred.',
            status,
            _responseText,
            _headers
          );
        })
      );
    }
    return _observableOf<FileResponse | null>(null as any);
  }
}

@Injectable()
export class GenreClient {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string
  ) {
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  getAllGenre(): Observable<FileResponse | null> {
    let url_ = this.baseUrl + '/api/Genre';
    url_ = url_.replace(/[?&]$/, '');

    let options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        Accept: 'application/octet-stream',
      }),
    };

    return this.http
      .request('get', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processGetAllGenre(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processGetAllGenre(response_ as any);
            } catch (e) {
              return _observableThrow(
                e
              ) as any as Observable<FileResponse | null>;
            }
          } else
            return _observableThrow(
              response_
            ) as any as Observable<FileResponse | null>;
        })
      );
  }

  protected processGetAllGenre(
    response: HttpResponseBase
  ): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (response as any).error instanceof Blob
        ? (response as any).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers
        ? response.headers.get('content-disposition')
        : undefined;
      let fileNameMatch = contentDisposition
        ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(
            contentDisposition
          )
        : undefined;
      let fileName =
        fileNameMatch && fileNameMatch.length > 1
          ? fileNameMatch[3] || fileNameMatch[2]
          : undefined;
      if (fileName) {
        fileName = decodeURIComponent(fileName);
      } else {
        fileNameMatch = contentDisposition
          ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition)
          : undefined;
        fileName =
          fileNameMatch && fileNameMatch.length > 1
            ? fileNameMatch[1]
            : undefined;
      }
      return _observableOf({
        fileName: fileName,
        data: responseBlob as any,
        status: status,
        headers: _headers,
      });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap((_responseText) => {
          return throwException(
            'An unexpected server error occurred.',
            status,
            _responseText,
            _headers
          );
        })
      );
    }
    return _observableOf<FileResponse | null>(null as any);
  }

  addGenre(genre: Genre): Observable<FileResponse | null> {
    let url_ = this.baseUrl + '/api/Genre';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(genre);

    let options_: any = {
      body: content_,
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/octet-stream',
      }),
    };

    return this.http
      .request('post', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processAddGenre(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processAddGenre(response_ as any);
            } catch (e) {
              return _observableThrow(
                e
              ) as any as Observable<FileResponse | null>;
            }
          } else
            return _observableThrow(
              response_
            ) as any as Observable<FileResponse | null>;
        })
      );
  }

  protected processAddGenre(
    response: HttpResponseBase
  ): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (response as any).error instanceof Blob
        ? (response as any).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers
        ? response.headers.get('content-disposition')
        : undefined;
      let fileNameMatch = contentDisposition
        ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(
            contentDisposition
          )
        : undefined;
      let fileName =
        fileNameMatch && fileNameMatch.length > 1
          ? fileNameMatch[3] || fileNameMatch[2]
          : undefined;
      if (fileName) {
        fileName = decodeURIComponent(fileName);
      } else {
        fileNameMatch = contentDisposition
          ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition)
          : undefined;
        fileName =
          fileNameMatch && fileNameMatch.length > 1
            ? fileNameMatch[1]
            : undefined;
      }
      return _observableOf({
        fileName: fileName,
        data: responseBlob as any,
        status: status,
        headers: _headers,
      });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap((_responseText) => {
          return throwException(
            'An unexpected server error occurred.',
            status,
            _responseText,
            _headers
          );
        })
      );
    }
    return _observableOf<FileResponse | null>(null as any);
  }

  getGenre(id: number): Observable<FileResponse | null> {
    let url_ = this.baseUrl + '/api/Genre/{id}';
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent('' + id));
    url_ = url_.replace(/[?&]$/, '');

    let options_: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        Accept: 'application/octet-stream',
      }),
    };

    return this.http
      .request('get', url_, options_)
      .pipe(
        _observableMergeMap((response_: any) => {
          return this.processGetGenre(response_);
        })
      )
      .pipe(
        _observableCatch((response_: any) => {
          if (response_ instanceof HttpResponseBase) {
            try {
              return this.processGetGenre(response_ as any);
            } catch (e) {
              return _observableThrow(
                e
              ) as any as Observable<FileResponse | null>;
            }
          } else
            return _observableThrow(
              response_
            ) as any as Observable<FileResponse | null>;
        })
      );
  }

  protected processGetGenre(
    response: HttpResponseBase
  ): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse
        ? response.body
        : (response as any).error instanceof Blob
        ? (response as any).error
        : undefined;

    let _headers: any = {};
    if (response.headers) {
      for (let key of response.headers.keys()) {
        _headers[key] = response.headers.get(key);
      }
    }
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers
        ? response.headers.get('content-disposition')
        : undefined;
      let fileNameMatch = contentDisposition
        ? /filename\*=(?:(\\?['"])(.*?)\1|(?:[^\s]+'.*?')?([^;\n]*))/g.exec(
            contentDisposition
          )
        : undefined;
      let fileName =
        fileNameMatch && fileNameMatch.length > 1
          ? fileNameMatch[3] || fileNameMatch[2]
          : undefined;
      if (fileName) {
        fileName = decodeURIComponent(fileName);
      } else {
        fileNameMatch = contentDisposition
          ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition)
          : undefined;
        fileName =
          fileNameMatch && fileNameMatch.length > 1
            ? fileNameMatch[1]
            : undefined;
      }
      return _observableOf({
        fileName: fileName,
        data: responseBlob as any,
        status: status,
        headers: _headers,
      });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(
        _observableMergeMap((_responseText) => {
          return throwException(
            'An unexpected server error occurred.',
            status,
            _responseText,
            _headers
          );
        })
      );
    }
    return _observableOf<FileResponse | null>(null as any);
  }
}

@Injectable()
export class WeatherForecastClient {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string
  ) {
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  // get(): Observable<WeatherForecast[]> {
  //     let url_ = this.baseUrl + "/WeatherForecast";
  //     url_ = url_.replace(/[?&]$/, "");

  //     let options_ : any = {
  //         observe: "response",
  //         responseType: "blob",
  //         headers: new HttpHeaders({
  //             "Accept": "application/json"
  //         })
  //     };

  //     return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
  //         return this.processGet(response_);
  //     })).pipe(_observableCatch((response_: any) => {
  //         if (response_ instanceof HttpResponseBase) {
  //             try {
  //                 return this.processGet(response_ as any);
  //             } catch (e) {
  //                 return _observableThrow(e) as any as Observable<WeatherForecast[]>;
  //             }
  //         } else
  //             return _observableThrow(response_) as any as Observable<WeatherForecast[]>;
  //     }));
  // }

  // protected processGet(response: HttpResponseBase): Observable<WeatherForecast[]> {
  //     const status = response.status;
  //     const responseBlob =
  //         response instanceof HttpResponse ? response.body :
  //         (response as any).error instanceof Blob ? (response as any).error : undefined;

  //     let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
  //     if (status === 200) {
  //         return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
  //         let result200: any = null;
  //         let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
  //         if (Array.isArray(resultData200)) {
  //             result200 = [] as any;
  //             for (let item of resultData200)
  //                 result200!.push(WeatherForecast.fromJS(item));
  //         }
  //         else {
  //             result200 = <any>null;
  //         }
  //         return _observableOf(result200);
  //         }));
  //     } else if (status !== 200 && status !== 204) {
  //         return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
  //         return throwException("An unexpected server error occurred.", status, _responseText, _headers);
  //         }));
  //     }
  //     return _observableOf<WeatherForecast[]>(null as any);
  // }
}

export class BookVM implements IBookVM {
  id!: number;
  title!: string;
  description!: string;
  author!: string;
  image!: string;
  genreId!: number;

  constructor(data?: IBookVM) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data['id'];
      this.title = _data['title'];
      this.description = _data['description'];
      this.author = _data['author'];
      this.image = _data['image'];
      this.genreId = _data['genreId'];
    }
  }

  static fromJS(data: any): BookVM {
    data = typeof data === 'object' ? data : {};
    let result = new BookVM();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['title'] = this.title;
    data['description'] = this.description;
    data['author'] = this.author;
    data['image'] = this.image;
    data['genreId'] = this.genreId;
    return data;
  }
}

export interface IBookVM {
  id: number;
  title: string;
  description: string;
  author: string;
  image: string;
  genreId: number;
}

export class Genre implements IGenre {
  id!: number;
  name!: string;

  constructor(data?: IGenre) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data['id'];
      this.name = _data['name'];
    }
  }

  static fromJS(data: any): Genre {
    data = typeof data === 'object' ? data : {};
    let result = new Genre();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['name'] = this.name;
    return data;
  }
}

export interface IGenre {
  id: number;
  name: string;
}

export class WeatherForecast implements IWeatherForecast {
  date!: Date;
  temperatureC!: number;
  temperatureF!: number;
  summary?: string | undefined;

  constructor(data?: IWeatherForecast) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.date = _data['date']
        ? new Date(_data['date'].toString())
        : <any>undefined;
      this.temperatureC = _data['temperatureC'];
      this.temperatureF = _data['temperatureF'];
      this.summary = _data['summary'];
    }
  }

  static fromJS(data: any): WeatherForecast {
    data = typeof data === 'object' ? data : {};
    let result = new WeatherForecast();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['date'] = this.date ? this.date.toISOString() : <any>undefined;
    data['temperatureC'] = this.temperatureC;
    data['temperatureF'] = this.temperatureF;
    data['summary'] = this.summary;
    return data;
  }
}

export interface IWeatherForecast {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary?: string | undefined;
}

export interface FileResponse {
  data: Blob;
  status: number;
  fileName?: string;
  headers?: { [name: string]: any };
}

export class ApiException extends Error {
  override message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result: any
  ) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): Observable<any> {
  if (result !== null && result !== undefined) return _observableThrow(result);
  else
    return _observableThrow(
      new ApiException(message, status, response, headers, null)
    );
}

function blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
    if (!blob) {
      observer.next('');
      observer.complete();
    } else {
      let reader = new FileReader();
      reader.onload = (event) => {
        observer.next((event.target as any).result);
        observer.complete();
      };
      reader.readAsText(blob);
    }
  });
}
