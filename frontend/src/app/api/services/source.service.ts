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

import { CreateSourceModel } from '../models/create-source-model';
import { SourceDetails } from '../models/source-details';
import { UpdateSourceModel } from '../models/update-source-model';

@Injectable({
  providedIn: 'root',
})
export class SourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSourceGetAllSourcesGet
   */
  static readonly ApiSourceGetAllSourcesGetPath = '/api/Source/GetAllSources';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceGetAllSourcesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceGetAllSourcesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SourceDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SourceService.ApiSourceGetAllSourcesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SourceDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSourceGetAllSourcesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceGetAllSourcesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<SourceDetails>> {

    return this.apiSourceGetAllSourcesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SourceDetails>>) => r.body as Array<SourceDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceGetAllSourcesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceGetAllSourcesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SourceDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SourceService.ApiSourceGetAllSourcesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SourceDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSourceGetAllSourcesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceGetAllSourcesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<SourceDetails>> {

    return this.apiSourceGetAllSourcesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SourceDetails>>) => r.body as Array<SourceDetails>)
    );
  }

  /**
   * Path part for operation apiSourceIdGetSourceByIdGet
   */
  static readonly ApiSourceIdGetSourceByIdGetPath = '/api/Source/{id}/GetSourceById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceIdGetSourceByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceIdGetSourceByIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SourceDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SourceService.ApiSourceIdGetSourceByIdGetPath, 'get');
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
        return r as StrictHttpResponse<SourceDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSourceIdGetSourceByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceIdGetSourceByIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<SourceDetails> {

    return this.apiSourceIdGetSourceByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SourceDetails>) => r.body as SourceDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceIdGetSourceByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceIdGetSourceByIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SourceDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SourceService.ApiSourceIdGetSourceByIdGetPath, 'get');
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
        return r as StrictHttpResponse<SourceDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSourceIdGetSourceByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceIdGetSourceByIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<SourceDetails> {

    return this.apiSourceIdGetSourceByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SourceDetails>) => r.body as SourceDetails)
    );
  }

  /**
   * Path part for operation apiSourceStartDateGetSourcesByTimeSpanEndDateGet
   */
  static readonly ApiSourceStartDateGetSourcesByTimeSpanEndDateGetPath = '/api/Source/{startDate}/GetSourcesByTimeSpan/{endDate}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceStartDateGetSourcesByTimeSpanEndDateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceStartDateGetSourcesByTimeSpanEndDateGet$Plain$Response(params: {
    startDate: string;
    endDate: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SourceDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SourceService.ApiSourceStartDateGetSourcesByTimeSpanEndDateGetPath, 'get');
    if (params) {
      rb.path('startDate', params.startDate, {});
      rb.path('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SourceDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSourceStartDateGetSourcesByTimeSpanEndDateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceStartDateGetSourcesByTimeSpanEndDateGet$Plain(params: {
    startDate: string;
    endDate: string;
  },
  context?: HttpContext

): Observable<Array<SourceDetails>> {

    return this.apiSourceStartDateGetSourcesByTimeSpanEndDateGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SourceDetails>>) => r.body as Array<SourceDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceStartDateGetSourcesByTimeSpanEndDateGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceStartDateGetSourcesByTimeSpanEndDateGet$Json$Response(params: {
    startDate: string;
    endDate: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SourceDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SourceService.ApiSourceStartDateGetSourcesByTimeSpanEndDateGetPath, 'get');
    if (params) {
      rb.path('startDate', params.startDate, {});
      rb.path('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SourceDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSourceStartDateGetSourcesByTimeSpanEndDateGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceStartDateGetSourcesByTimeSpanEndDateGet$Json(params: {
    startDate: string;
    endDate: string;
  },
  context?: HttpContext

): Observable<Array<SourceDetails>> {

    return this.apiSourceStartDateGetSourcesByTimeSpanEndDateGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SourceDetails>>) => r.body as Array<SourceDetails>)
    );
  }

  /**
   * Path part for operation apiSourceCreateSourcePost
   */
  static readonly ApiSourceCreateSourcePostPath = '/api/Source/CreateSource';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceCreateSourcePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSourceCreateSourcePost$Response(params?: {
    body?: CreateSourceModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SourceService.ApiSourceCreateSourcePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSourceCreateSourcePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSourceCreateSourcePost(params?: {
    body?: CreateSourceModel
  },
  context?: HttpContext

): Observable<void> {

    return this.apiSourceCreateSourcePost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSourceIdUpdateSourcePatch
   */
  static readonly ApiSourceIdUpdateSourcePatchPath = '/api/Source/{id}/UpdateSource';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceIdUpdateSourcePatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSourceIdUpdateSourcePatch$Response(params: {
    id: string;
    body?: UpdateSourceModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SourceService.ApiSourceIdUpdateSourcePatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiSourceIdUpdateSourcePatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSourceIdUpdateSourcePatch(params: {
    id: string;
    body?: UpdateSourceModel
  },
  context?: HttpContext

): Observable<void> {

    return this.apiSourceIdUpdateSourcePatch$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSourceIdDeleteSourceDelete
   */
  static readonly ApiSourceIdDeleteSourceDeletePath = '/api/Source/{id}/DeleteSource';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceIdDeleteSourceDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceIdDeleteSourceDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SourceService.ApiSourceIdDeleteSourceDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiSourceIdDeleteSourceDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceIdDeleteSourceDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiSourceIdDeleteSourceDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
