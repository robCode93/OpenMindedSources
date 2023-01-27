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

import { CreateSubCategoryModel } from '../models/create-sub-category-model';
import { SubCategoryDetails } from '../models/sub-category-details';
import { UpdateSubCategoryModel } from '../models/update-sub-category-model';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSubCategoryGetAllSubCategoriesGet
   */
  static readonly ApiSubCategoryGetAllSubCategoriesGetPath = '/api/SubCategory/GetAllSubCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubCategoryGetAllSubCategoriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryGetAllSubCategoriesGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SubCategoryDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SubCategoryService.ApiSubCategoryGetAllSubCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SubCategoryDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubCategoryGetAllSubCategoriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryGetAllSubCategoriesGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<SubCategoryDetails>> {

    return this.apiSubCategoryGetAllSubCategoriesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SubCategoryDetails>>) => r.body as Array<SubCategoryDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubCategoryGetAllSubCategoriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryGetAllSubCategoriesGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SubCategoryDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SubCategoryService.ApiSubCategoryGetAllSubCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SubCategoryDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubCategoryGetAllSubCategoriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryGetAllSubCategoriesGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<SubCategoryDetails>> {

    return this.apiSubCategoryGetAllSubCategoriesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SubCategoryDetails>>) => r.body as Array<SubCategoryDetails>)
    );
  }

  /**
   * Path part for operation apiSubCategoryIdGetSubCategoriesBySourcecategoryGet
   */
  static readonly ApiSubCategoryIdGetSubCategoriesBySourcecategoryGetPath = '/api/SubCategory/{id}/GetSubCategoriesBySourcecategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubCategoryIdGetSubCategoriesBySourcecategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryIdGetSubCategoriesBySourcecategoryGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SubCategoryDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SubCategoryService.ApiSubCategoryIdGetSubCategoriesBySourcecategoryGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SubCategoryDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubCategoryIdGetSubCategoriesBySourcecategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryIdGetSubCategoriesBySourcecategoryGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<SubCategoryDetails>> {

    return this.apiSubCategoryIdGetSubCategoriesBySourcecategoryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SubCategoryDetails>>) => r.body as Array<SubCategoryDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubCategoryIdGetSubCategoriesBySourcecategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryIdGetSubCategoriesBySourcecategoryGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SubCategoryDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, SubCategoryService.ApiSubCategoryIdGetSubCategoriesBySourcecategoryGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SubCategoryDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubCategoryIdGetSubCategoriesBySourcecategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryIdGetSubCategoriesBySourcecategoryGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<SubCategoryDetails>> {

    return this.apiSubCategoryIdGetSubCategoriesBySourcecategoryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SubCategoryDetails>>) => r.body as Array<SubCategoryDetails>)
    );
  }

  /**
   * Path part for operation apiSubCategoryIdGetSubCategoryByIdGet
   */
  static readonly ApiSubCategoryIdGetSubCategoryByIdGetPath = '/api/SubCategory/{id}/GetSubCategoryById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubCategoryIdGetSubCategoryByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryIdGetSubCategoryByIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SubCategoryDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SubCategoryService.ApiSubCategoryIdGetSubCategoryByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SubCategoryDetails>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubCategoryIdGetSubCategoryByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryIdGetSubCategoryByIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SubCategoryDetails> {

    return this.apiSubCategoryIdGetSubCategoryByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SubCategoryDetails>) => r.body as SubCategoryDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubCategoryIdGetSubCategoryByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryIdGetSubCategoryByIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SubCategoryDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SubCategoryService.ApiSubCategoryIdGetSubCategoryByIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SubCategoryDetails>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubCategoryIdGetSubCategoryByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryIdGetSubCategoryByIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<SubCategoryDetails> {

    return this.apiSubCategoryIdGetSubCategoryByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SubCategoryDetails>) => r.body as SubCategoryDetails)
    );
  }

  /**
   * Path part for operation apiSubCategoryIdCreateSubCategoryPost
   */
  static readonly ApiSubCategoryIdCreateSubCategoryPostPath = '/api/SubCategory/{id}/CreateSubCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubCategoryIdCreateSubCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubCategoryIdCreateSubCategoryPost$Response(params: {
    id: string;
    context?: HttpContext
    body?: CreateSubCategoryModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubCategoryService.ApiSubCategoryIdCreateSubCategoryPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubCategoryIdCreateSubCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubCategoryIdCreateSubCategoryPost(params: {
    id: string;
    context?: HttpContext
    body?: CreateSubCategoryModel
  }
): Observable<void> {

    return this.apiSubCategoryIdCreateSubCategoryPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSubCategoryIdUpdateSubCategoryPatch
   */
  static readonly ApiSubCategoryIdUpdateSubCategoryPatchPath = '/api/SubCategory/{id}/UpdateSubCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubCategoryIdUpdateSubCategoryPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubCategoryIdUpdateSubCategoryPatch$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSubCategoryModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubCategoryService.ApiSubCategoryIdUpdateSubCategoryPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubCategoryIdUpdateSubCategoryPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSubCategoryIdUpdateSubCategoryPatch(params: {
    id: string;
    context?: HttpContext
    body?: UpdateSubCategoryModel
  }
): Observable<void> {

    return this.apiSubCategoryIdUpdateSubCategoryPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSubCategoryIdDeleteSubCategoryDelete
   */
  static readonly ApiSubCategoryIdDeleteSubCategoryDeletePath = '/api/SubCategory/{id}/DeleteSubCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSubCategoryIdDeleteSubCategoryDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryIdDeleteSubCategoryDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SubCategoryService.ApiSubCategoryIdDeleteSubCategoryDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSubCategoryIdDeleteSubCategoryDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSubCategoryIdDeleteSubCategoryDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiSubCategoryIdDeleteSubCategoryDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
