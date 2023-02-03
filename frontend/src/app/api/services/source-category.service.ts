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

import { CreateSourceCategoryModel } from '../models/create-source-category-model';
import { SourceCategoryDetails } from '../models/source-category-details';
import { UpdateSourceCategoryModel } from '../models/update-source-category-model';

@Injectable({
  providedIn: 'root',
})
export class SourceCategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSourceCategoryGetAllSourceCategoriesGet
   */
  static readonly ApiSourceCategoryGetAllSourceCategoriesGetPath = '/api/SourceCategory/GetAllSourceCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceCategoryGetAllSourceCategoriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceCategoryGetAllSourceCategoriesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SourceCategoryDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SourceCategoryService.ApiSourceCategoryGetAllSourceCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SourceCategoryDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSourceCategoryGetAllSourceCategoriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceCategoryGetAllSourceCategoriesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<SourceCategoryDetails>> {

    return this.apiSourceCategoryGetAllSourceCategoriesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SourceCategoryDetails>>) => r.body as Array<SourceCategoryDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceCategoryGetAllSourceCategoriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceCategoryGetAllSourceCategoriesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SourceCategoryDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SourceCategoryService.ApiSourceCategoryGetAllSourceCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SourceCategoryDetails>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSourceCategoryGetAllSourceCategoriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceCategoryGetAllSourceCategoriesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<SourceCategoryDetails>> {

    return this.apiSourceCategoryGetAllSourceCategoriesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SourceCategoryDetails>>) => r.body as Array<SourceCategoryDetails>)
    );
  }

  /**
   * Path part for operation apiSourceCategoryIdGetSourceCategoryByIdGet
   */
  static readonly ApiSourceCategoryIdGetSourceCategoryByIdGetPath = '/api/SourceCategory/{id}/GetSourceCategoryById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceCategoryIdGetSourceCategoryByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceCategoryIdGetSourceCategoryByIdGet$Plain$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SourceCategoryDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SourceCategoryService.ApiSourceCategoryIdGetSourceCategoryByIdGetPath, 'get');
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
        return r as StrictHttpResponse<SourceCategoryDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSourceCategoryIdGetSourceCategoryByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceCategoryIdGetSourceCategoryByIdGet$Plain(params: {
    id: string;
  },
  context?: HttpContext

): Observable<SourceCategoryDetails> {

    return this.apiSourceCategoryIdGetSourceCategoryByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SourceCategoryDetails>) => r.body as SourceCategoryDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceCategoryIdGetSourceCategoryByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceCategoryIdGetSourceCategoryByIdGet$Json$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SourceCategoryDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SourceCategoryService.ApiSourceCategoryIdGetSourceCategoryByIdGetPath, 'get');
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
        return r as StrictHttpResponse<SourceCategoryDetails>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSourceCategoryIdGetSourceCategoryByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceCategoryIdGetSourceCategoryByIdGet$Json(params: {
    id: string;
  },
  context?: HttpContext

): Observable<SourceCategoryDetails> {

    return this.apiSourceCategoryIdGetSourceCategoryByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SourceCategoryDetails>) => r.body as SourceCategoryDetails)
    );
  }

  /**
   * Path part for operation apiSourceCategoryCreateSourceCategoryPost
   */
  static readonly ApiSourceCategoryCreateSourceCategoryPostPath = '/api/SourceCategory/CreateSourceCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceCategoryCreateSourceCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSourceCategoryCreateSourceCategoryPost$Response(params?: {
    body?: CreateSourceCategoryModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SourceCategoryService.ApiSourceCategoryCreateSourceCategoryPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSourceCategoryCreateSourceCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSourceCategoryCreateSourceCategoryPost(params?: {
    body?: CreateSourceCategoryModel
  },
  context?: HttpContext

): Observable<void> {

    return this.apiSourceCategoryCreateSourceCategoryPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSourceCategoryIdUpdateSourceCategoryPatch
   */
  static readonly ApiSourceCategoryIdUpdateSourceCategoryPatchPath = '/api/SourceCategory/{id}/UpdateSourceCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceCategoryIdUpdateSourceCategoryPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSourceCategoryIdUpdateSourceCategoryPatch$Response(params: {
    id: string;
    body?: UpdateSourceCategoryModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SourceCategoryService.ApiSourceCategoryIdUpdateSourceCategoryPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `apiSourceCategoryIdUpdateSourceCategoryPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSourceCategoryIdUpdateSourceCategoryPatch(params: {
    id: string;
    body?: UpdateSourceCategoryModel
  },
  context?: HttpContext

): Observable<void> {

    return this.apiSourceCategoryIdUpdateSourceCategoryPatch$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSourceCategoryIdDeleteSourceCategoryDelete
   */
  static readonly ApiSourceCategoryIdDeleteSourceCategoryDeletePath = '/api/SourceCategory/{id}/DeleteSourceCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSourceCategoryIdDeleteSourceCategoryDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceCategoryIdDeleteSourceCategoryDelete$Response(params: {
    id: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SourceCategoryService.ApiSourceCategoryIdDeleteSourceCategoryDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiSourceCategoryIdDeleteSourceCategoryDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSourceCategoryIdDeleteSourceCategoryDelete(params: {
    id: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiSourceCategoryIdDeleteSourceCategoryDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
