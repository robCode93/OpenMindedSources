/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateFileReferenceModel } from '../models/create-file-reference-model';
import { FileReferenceDetails } from '../models/file-reference-details';

@Injectable({
  providedIn: 'root',
})
export class FileReferenceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiFileReferenceGetAllFileReferencesGet
   */
  static readonly ApiFileReferenceGetAllFileReferencesGetPath = '/api/FileReference/GetAllFileReferences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileReferenceGetAllFileReferencesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceGetAllFileReferencesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<FileReferenceDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, FileReferenceService.ApiFileReferenceGetAllFileReferencesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FileReferenceDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileReferenceGetAllFileReferencesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceGetAllFileReferencesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<FileReferenceDetails>> {

    return this.apiFileReferenceGetAllFileReferencesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FileReferenceDetails>>) => r.body as Array<FileReferenceDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileReferenceGetAllFileReferencesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceGetAllFileReferencesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<FileReferenceDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, FileReferenceService.ApiFileReferenceGetAllFileReferencesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FileReferenceDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileReferenceGetAllFileReferencesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceGetAllFileReferencesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<FileReferenceDetails>> {

    return this.apiFileReferenceGetAllFileReferencesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FileReferenceDetails>>) => r.body as Array<FileReferenceDetails>)
    );
  }

  /**
   * Path part for operation apiFileReferenceIdGetFileReferenceByIdGet
   */
  static readonly ApiFileReferenceIdGetFileReferenceByIdGetPath = '/api/FileReference/{id}/GetFileReferenceById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileReferenceIdGetFileReferenceByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceIdGetFileReferenceByIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FileReferenceDetails>> {

    const rb = new RequestBuilder(this.rootUrl, FileReferenceService.ApiFileReferenceIdGetFileReferenceByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileReferenceDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileReferenceIdGetFileReferenceByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceIdGetFileReferenceByIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<FileReferenceDetails> {

    return this.apiFileReferenceIdGetFileReferenceByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<FileReferenceDetails>) => r.body as FileReferenceDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileReferenceIdGetFileReferenceByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceIdGetFileReferenceByIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FileReferenceDetails>> {

    const rb = new RequestBuilder(this.rootUrl, FileReferenceService.ApiFileReferenceIdGetFileReferenceByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileReferenceDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileReferenceIdGetFileReferenceByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceIdGetFileReferenceByIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<FileReferenceDetails> {

    return this.apiFileReferenceIdGetFileReferenceByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<FileReferenceDetails>) => r.body as FileReferenceDetails)
    );
  }

  /**
   * Path part for operation apiFileReferenceIdDownloadFileFromDatabaseGet
   */
  static readonly ApiFileReferenceIdDownloadFileFromDatabaseGetPath = '/api/FileReference/{id}/DownloadFileFromDatabase';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileReferenceIdDownloadFileFromDatabaseGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceIdDownloadFileFromDatabaseGet$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FileReferenceService.ApiFileReferenceIdDownloadFileFromDatabaseGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileReferenceIdDownloadFileFromDatabaseGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceIdDownloadFileFromDatabaseGet(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiFileReferenceIdDownloadFileFromDatabaseGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiFileReferenceCreateFileReferencePost
   */
  static readonly ApiFileReferenceCreateFileReferencePostPath = '/api/FileReference/CreateFileReference';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileReferenceCreateFileReferencePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFileReferenceCreateFileReferencePost$Response(params?: {
    body?: CreateFileReferenceModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FileReferenceService.ApiFileReferenceCreateFileReferencePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileReferenceCreateFileReferencePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFileReferenceCreateFileReferencePost(params?: {
    body?: CreateFileReferenceModel
  },
  context?: HttpContext

): Observable<void> {

    return this.apiFileReferenceCreateFileReferencePost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiFileReferenceUploadFileToDatabasePost
   */
  static readonly ApiFileReferenceUploadFileToDatabasePostPath = '/api/FileReference/UploadFileToDatabase';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileReferenceUploadFileToDatabasePost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileReferenceUploadFileToDatabasePost$Plain$Response(params?: {
    body?: CreateFileReferenceModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FileReferenceDetails>> {

    const rb = new RequestBuilder(this.rootUrl, FileReferenceService.ApiFileReferenceUploadFileToDatabasePostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileReferenceDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileReferenceUploadFileToDatabasePost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileReferenceUploadFileToDatabasePost$Plain(params?: {
    body?: CreateFileReferenceModel
  },
  context?: HttpContext

): Observable<FileReferenceDetails> {

    return this.apiFileReferenceUploadFileToDatabasePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<FileReferenceDetails>) => r.body as FileReferenceDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileReferenceUploadFileToDatabasePost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileReferenceUploadFileToDatabasePost$Json$Response(params?: {
    body?: CreateFileReferenceModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FileReferenceDetails>> {

    const rb = new RequestBuilder(this.rootUrl, FileReferenceService.ApiFileReferenceUploadFileToDatabasePostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileReferenceDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileReferenceUploadFileToDatabasePost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileReferenceUploadFileToDatabasePost$Json(params?: {
    body?: CreateFileReferenceModel
  },
  context?: HttpContext

): Observable<FileReferenceDetails> {

    return this.apiFileReferenceUploadFileToDatabasePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<FileReferenceDetails>) => r.body as FileReferenceDetails)
    );
  }

  /**
   * Path part for operation apiFileReferenceIdDeleteFileReferenceDelete
   */
  static readonly ApiFileReferenceIdDeleteFileReferenceDeletePath = '/api/FileReference/{id}/DeleteFileReference';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileReferenceIdDeleteFileReferenceDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceIdDeleteFileReferenceDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FileReferenceService.ApiFileReferenceIdDeleteFileReferenceDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileReferenceIdDeleteFileReferenceDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileReferenceIdDeleteFileReferenceDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiFileReferenceIdDeleteFileReferenceDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
