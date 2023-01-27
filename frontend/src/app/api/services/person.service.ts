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

import { CreatePersonModel } from '../models/create-person-model';
import { PersonDetails } from '../models/person-details';
import { UpdatePersonModel } from '../models/update-person-model';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPersonGetAllPersonsGet
   */
  static readonly ApiPersonGetAllPersonsGetPath = '/api/Person/GetAllPersons';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPersonGetAllPersonsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonGetAllPersonsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PersonDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiPersonGetAllPersonsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PersonDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPersonGetAllPersonsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonGetAllPersonsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<PersonDetails>> {

    return this.apiPersonGetAllPersonsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PersonDetails>>) => r.body as Array<PersonDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPersonGetAllPersonsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonGetAllPersonsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PersonDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiPersonGetAllPersonsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PersonDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPersonGetAllPersonsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonGetAllPersonsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<PersonDetails>> {

    return this.apiPersonGetAllPersonsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PersonDetails>>) => r.body as Array<PersonDetails>)
    );
  }

  /**
   * Path part for operation apiPersonStartDateGetPersonsByTimeSpanEndDateGet
   */
  static readonly ApiPersonStartDateGetPersonsByTimeSpanEndDateGetPath = '/api/Person/{startDate}/GetPersonsByTimeSpan/{endDate}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPersonStartDateGetPersonsByTimeSpanEndDateGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonStartDateGetPersonsByTimeSpanEndDateGet$Plain$Response(params: {
    startDate: string;
    endDate: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PersonDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiPersonStartDateGetPersonsByTimeSpanEndDateGetPath, 'get');
    if (params) {
      rb.path('startDate', params.startDate, {});
      rb.path('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PersonDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPersonStartDateGetPersonsByTimeSpanEndDateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonStartDateGetPersonsByTimeSpanEndDateGet$Plain(params: {
    startDate: string;
    endDate: string;
    context?: HttpContext
  }
): Observable<Array<PersonDetails>> {

    return this.apiPersonStartDateGetPersonsByTimeSpanEndDateGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PersonDetails>>) => r.body as Array<PersonDetails>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPersonStartDateGetPersonsByTimeSpanEndDateGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonStartDateGetPersonsByTimeSpanEndDateGet$Json$Response(params: {
    startDate: string;
    endDate: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<PersonDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiPersonStartDateGetPersonsByTimeSpanEndDateGetPath, 'get');
    if (params) {
      rb.path('startDate', params.startDate, {});
      rb.path('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PersonDetails>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPersonStartDateGetPersonsByTimeSpanEndDateGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonStartDateGetPersonsByTimeSpanEndDateGet$Json(params: {
    startDate: string;
    endDate: string;
    context?: HttpContext
  }
): Observable<Array<PersonDetails>> {

    return this.apiPersonStartDateGetPersonsByTimeSpanEndDateGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PersonDetails>>) => r.body as Array<PersonDetails>)
    );
  }

  /**
   * Path part for operation apiPersonIdGetPersonByIdGet
   */
  static readonly ApiPersonIdGetPersonByIdGetPath = '/api/Person/{id}/GetPersonById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPersonIdGetPersonByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonIdGetPersonByIdGet$Plain$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PersonDetails>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiPersonIdGetPersonByIdGetPath, 'get');
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
        return r as StrictHttpResponse<PersonDetails>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPersonIdGetPersonByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonIdGetPersonByIdGet$Plain(params: {
    id: string;
    context?: HttpContext
  }
): Observable<PersonDetails> {

    return this.apiPersonIdGetPersonByIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PersonDetails>) => r.body as PersonDetails)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPersonIdGetPersonByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonIdGetPersonByIdGet$Json$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<PersonDetails>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiPersonIdGetPersonByIdGetPath, 'get');
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
        return r as StrictHttpResponse<PersonDetails>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPersonIdGetPersonByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonIdGetPersonByIdGet$Json(params: {
    id: string;
    context?: HttpContext
  }
): Observable<PersonDetails> {

    return this.apiPersonIdGetPersonByIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PersonDetails>) => r.body as PersonDetails)
    );
  }

  /**
   * Path part for operation apiPersonCreatePersonPost
   */
  static readonly ApiPersonCreatePersonPostPath = '/api/Person/CreatePerson';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPersonCreatePersonPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPersonCreatePersonPost$Response(params?: {
    context?: HttpContext
    body?: CreatePersonModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiPersonCreatePersonPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `apiPersonCreatePersonPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPersonCreatePersonPost(params?: {
    context?: HttpContext
    body?: CreatePersonModel
  }
): Observable<void> {

    return this.apiPersonCreatePersonPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPersonIdUpdatePersonPatch
   */
  static readonly ApiPersonIdUpdatePersonPatchPath = '/api/Person/{id}/UpdatePerson';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPersonIdUpdatePersonPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPersonIdUpdatePersonPatch$Response(params: {
    id: string;
    context?: HttpContext
    body?: UpdatePersonModel
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiPersonIdUpdatePersonPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `apiPersonIdUpdatePersonPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPersonIdUpdatePersonPatch(params: {
    id: string;
    context?: HttpContext
    body?: UpdatePersonModel
  }
): Observable<void> {

    return this.apiPersonIdUpdatePersonPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPersonSourceIdAddSourceToPersonPersonIdPatch
   */
  static readonly ApiPersonSourceIdAddSourceToPersonPersonIdPatchPath = '/api/Person/{sourceId}/AddSourceToPerson/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPersonSourceIdAddSourceToPersonPersonIdPatch()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonSourceIdAddSourceToPersonPersonIdPatch$Response(params: {
    sourceId: string;
    personId: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiPersonSourceIdAddSourceToPersonPersonIdPatchPath, 'patch');
    if (params) {
      rb.path('sourceId', params.sourceId, {});
      rb.path('personId', params.personId, {});
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
   * To access the full response (for headers, for example), `apiPersonSourceIdAddSourceToPersonPersonIdPatch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonSourceIdAddSourceToPersonPersonIdPatch(params: {
    sourceId: string;
    personId: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiPersonSourceIdAddSourceToPersonPersonIdPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPersonIdDeletePersonDelete
   */
  static readonly ApiPersonIdDeletePersonDeletePath = '/api/Person/{id}/DeletePerson';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPersonIdDeletePersonDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonIdDeletePersonDelete$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.ApiPersonIdDeletePersonDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiPersonIdDeletePersonDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPersonIdDeletePersonDelete(params: {
    id: string;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiPersonIdDeletePersonDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
