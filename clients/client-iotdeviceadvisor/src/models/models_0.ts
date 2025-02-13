// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { IotDeviceAdvisorServiceException as __BaseException } from "./IotDeviceAdvisorServiceException";

/**
 * <p>Sends a Conflict Exception.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>Information of a test device. A thing ARN or a certificate ARN is required.</p>
 */
export interface DeviceUnderTest {
  /**
   * <p>Lists devices thing ARN.</p>
   */
  thingArn?: string;

  /**
   * <p>Lists devices certificate ARN.</p>
   */
  certificateArn?: string;
}

export namespace DeviceUnderTest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceUnderTest): any => ({
    ...obj,
  });
}

/**
 * <p>Gets Suite Definition Configuration.</p>
 */
export interface SuiteDefinitionConfiguration {
  /**
   * <p>Gets Suite Definition Configuration name.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Gets the devices configured.</p>
   */
  devices?: DeviceUnderTest[];

  /**
   * <p>Gets the tests intended for qualification in a suite.</p>
   */
  intendedForQualification?: boolean;

  /**
   * <p>Gets test suite root group.</p>
   */
  rootGroup?: string;

  /**
   * <p>Gets the device permission ARN.</p>
   */
  devicePermissionRoleArn?: string;
}

export namespace SuiteDefinitionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuiteDefinitionConfiguration): any => ({
    ...obj,
  });
}

export interface CreateSuiteDefinitionRequest {
  /**
   * <p>Creates a Device Advisor test suite with suite definition configuration.</p>
   */
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;

  /**
   * <p>The tags to be attached to the suite definition.</p>
   */
  tags?: Record<string, string>;
}

export namespace CreateSuiteDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface CreateSuiteDefinitionResponse {
  /**
   * <p>Creates a Device Advisor test suite with suite UUID.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Creates a Device Advisor test suite with Amazon Resource Name (ARN).</p>
   */
  suiteDefinitionArn?: string;

  /**
   * <p>Creates a Device Advisor test suite with suite definition name.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Creates a Device Advisor test suite with TimeStamp of when it was created.</p>
   */
  createdAt?: Date;
}

export namespace CreateSuiteDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSuiteDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Sends an Internal Failure exception.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>Sends a validation exception.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

export interface DeleteSuiteDefinitionRequest {
  /**
   * <p>Suite definition ID of the test suite to be deleted.</p>
   */
  suiteDefinitionId: string | undefined;
}

export namespace DeleteSuiteDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSuiteDefinitionResponse {}

export namespace DeleteSuiteDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSuiteDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetEndpointRequest {
  /**
   * <p>The thing ARN of the device. This is an optional parameter.</p>
   */
  thingArn?: string;

  /**
   * <p>The certificate ARN of the device. This is an optional parameter.</p>
   */
  certificateArn?: string;
}

export namespace GetEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEndpointRequest): any => ({
    ...obj,
  });
}

export interface GetEndpointResponse {
  /**
   * <p>The response of an Device Advisor endpoint.</p>
   */
  endpoint?: string;
}

export namespace GetEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEndpointResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Sends a Resource Not Found exception.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

export interface GetSuiteDefinitionRequest {
  /**
   * <p>Suite definition ID of the test suite to get.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite definition version of the test suite to get.</p>
   */
  suiteDefinitionVersion?: string;
}

export namespace GetSuiteDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface GetSuiteDefinitionResponse {
  /**
   * <p>Suite definition ID of the suite definition.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>The ARN of the suite definition.</p>
   */
  suiteDefinitionArn?: string;

  /**
   * <p>Suite definition version of the suite definition.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Latest suite definition version of the suite definition.</p>
   */
  latestVersion?: string;

  /**
   * <p>Suite configuration of the suite definition.</p>
   */
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;

  /**
   * <p>Date (in Unix epoch time) when the suite definition was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Date (in Unix epoch time) when the suite definition was last modified.</p>
   */
  lastModifiedAt?: Date;

  /**
   * <p>Tags attached to the suite definition.</p>
   */
  tags?: Record<string, string>;
}

export namespace GetSuiteDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteDefinitionResponse): any => ({
    ...obj,
  });
}

export interface GetSuiteRunRequest {
  /**
   * <p>Suite definition ID for the test suite run.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run ID for the test suite run.</p>
   */
  suiteRunId: string | undefined;
}

export namespace GetSuiteRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteRunRequest): any => ({
    ...obj,
  });
}

export enum SuiteRunStatus {
  CANCELED = "CANCELED",
  ERROR = "ERROR",
  FAIL = "FAIL",
  PASS = "PASS",
  PASS_WITH_WARNINGS = "PASS_WITH_WARNINGS",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

/**
 * <p>Gets suite run configuration.</p>
 */
export interface SuiteRunConfiguration {
  /**
   * <p>Gets the primary device for suite run.</p>
   */
  primaryDevice?: DeviceUnderTest;

  /**
   * <p>Gets test case list.</p>
   */
  selectedTestList?: string[];

  /**
   * <p>TRUE if multiple test suites run in parallel.</p>
   */
  parallelRun?: boolean;
}

export namespace SuiteRunConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuiteRunConfiguration): any => ({
    ...obj,
  });
}

export enum Status {
  CANCELED = "CANCELED",
  ERROR = "ERROR",
  FAIL = "FAIL",
  PASS = "PASS",
  PASS_WITH_WARNINGS = "PASS_WITH_WARNINGS",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

/**
 * <p>Provides the test case run.</p>
 */
export interface TestCaseRun {
  /**
   * <p>Provides the test case run ID.</p>
   */
  testCaseRunId?: string;

  /**
   * <p>Provides the test case run definition ID.</p>
   */
  testCaseDefinitionId?: string;

  /**
   * <p>Provides the test case run definition name.</p>
   */
  testCaseDefinitionName?: string;

  /**
   * <p>Provides the test case run status. Status is one of the following:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>PASS</code>: Test passed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAIL</code>: Test failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: Test has not started running but is scheduled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: Test is running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code>: Test is performing cleanup steps. You will see this status only if you stop a suite run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> Test is stopped. You will see this status only if you stop a suite run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASS_WITH_WARNINGS</code>: Test passed with warnings.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERORR</code>: Test faced an error when running due to an internal issue.</p>
   *             </li>
   *          </ul>
   */
  status?: Status | string;

  /**
   * <p>Provides test case run start time.</p>
   */
  startTime?: Date;

  /**
   * <p>Provides test case run end time.</p>
   */
  endTime?: Date;

  /**
   * <p>Provides test case run log URL.</p>
   */
  logUrl?: string;

  /**
   * <p>Provides test case run warnings.</p>
   */
  warnings?: string;

  /**
   * <p>Provides test case run failure result.</p>
   */
  failure?: string;
}

export namespace TestCaseRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestCaseRun): any => ({
    ...obj,
  });
}

/**
 * <p>Show Group Result.</p>
 */
export interface GroupResult {
  /**
   * <p>Group result ID.</p>
   */
  groupId?: string;

  /**
   * <p>Group Result Name.</p>
   */
  groupName?: string;

  /**
   * <p>Tests under Group Result.</p>
   */
  tests?: TestCaseRun[];
}

export namespace GroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>Show each group result.</p>
 */
export interface TestResult {
  /**
   * <p>Show each group of test results.</p>
   */
  groups?: GroupResult[];
}

export namespace TestResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestResult): any => ({
    ...obj,
  });
}

export interface GetSuiteRunResponse {
  /**
   * <p>Suite definition ID for the test suite run.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Suite definition version for the test suite run.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Suite run ID for the test suite run.</p>
   */
  suiteRunId?: string;

  /**
   * <p>The ARN of the suite run.</p>
   */
  suiteRunArn?: string;

  /**
   * <p>Suite run configuration for the test suite run.</p>
   */
  suiteRunConfiguration?: SuiteRunConfiguration;

  /**
   * <p>Test results for the test suite run.</p>
   */
  testResult?: TestResult;

  /**
   * <p>Date (in Unix epoch time) when the test suite run started.</p>
   */
  startTime?: Date;

  /**
   * <p>Date (in Unix epoch time) when the test suite run ended.</p>
   */
  endTime?: Date;

  /**
   * <p>Status for the test suite run.</p>
   */
  status?: SuiteRunStatus | string;

  /**
   * <p>Error reason for any test suite run failure.</p>
   */
  errorReason?: string;

  /**
   * <p>The tags attached to the suite run.</p>
   */
  tags?: Record<string, string>;
}

export namespace GetSuiteRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteRunResponse): any => ({
    ...obj,
  });
}

export interface GetSuiteRunReportRequest {
  /**
   * <p>Suite definition ID of the test suite.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run ID of the test suite run.</p>
   */
  suiteRunId: string | undefined;
}

export namespace GetSuiteRunReportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteRunReportRequest): any => ({
    ...obj,
  });
}

export interface GetSuiteRunReportResponse {
  /**
   * <p>Download URL of the qualification report.</p>
   */
  qualificationReportDownloadUrl?: string;
}

export namespace GetSuiteRunReportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSuiteRunReportResponse): any => ({
    ...obj,
  });
}

export interface ListSuiteDefinitionsRequest {
  /**
   * <p>The maximum number of results to return at once.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListSuiteDefinitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSuiteDefinitionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the suite definition.</p>
 */
export interface SuiteDefinitionInformation {
  /**
   * <p>Suite definition ID of the test suite.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Suite name of the test suite.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Specifies the devices that are under test for the test suite.</p>
   */
  defaultDevices?: DeviceUnderTest[];

  /**
   * <p>Specifies if the test suite is intended for qualification.</p>
   */
  intendedForQualification?: boolean;

  /**
   * <p>Date (in Unix epoch time) when the test suite was created.</p>
   */
  createdAt?: Date;
}

export namespace SuiteDefinitionInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuiteDefinitionInformation): any => ({
    ...obj,
  });
}

export interface ListSuiteDefinitionsResponse {
  /**
   * <p>An array of objects that provide summaries of information about the suite definitions in the list.</p>
   */
  suiteDefinitionInformationList?: SuiteDefinitionInformation[];

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListSuiteDefinitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSuiteDefinitionsResponse): any => ({
    ...obj,
  });
}

export interface ListSuiteRunsRequest {
  /**
   * <p>Lists the test suite runs of the specified test suite based on suite definition
   *             ID.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Must be passed along with <code>suiteDefinitionId</code>. Lists the test suite runs of
   *             the specified test suite based on suite definition version.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>The maximum number of results to return at once.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListSuiteRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSuiteRunsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the suite run.</p>
 *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SuiteRunInformation</a> action.</p>
 */
export interface SuiteRunInformation {
  /**
   * <p>Suite definition ID of the suite run.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Suite definition version of the suite run.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Suite definition name of the suite run.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Suite run ID of the suite run.</p>
   */
  suiteRunId?: string;

  /**
   * <p>Date (in Unix epoch time) when the suite run was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Date (in Unix epoch time) when the suite run was started.</p>
   */
  startedAt?: Date;

  /**
   * <p>Date (in Unix epoch time) when the suite run ended.</p>
   */
  endAt?: Date;

  /**
   * <p>Status of the suite run.</p>
   */
  status?: SuiteRunStatus | string;

  /**
   * <p>Number of test cases that passed in the suite run.</p>
   */
  passed?: number;

  /**
   * <p>Number of test cases that failed in the suite run.</p>
   */
  failed?: number;
}

export namespace SuiteRunInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuiteRunInformation): any => ({
    ...obj,
  });
}

export interface ListSuiteRunsResponse {
  /**
   * <p>An array of objects that provide summaries of information about the suite runs in the list.</p>
   */
  suiteRunsList?: SuiteRunInformation[];

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListSuiteRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSuiteRunsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the IoT Device Advisor resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags attached to the IoT Device Advisor resource.</p>
   */
  tags?: Record<string, string>;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface StartSuiteRunRequest {
  /**
   * <p>Suite definition ID of the test suite.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite definition version of the test suite.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Suite run configuration.</p>
   */
  suiteRunConfiguration?: SuiteRunConfiguration;

  /**
   * <p>The tags to be attached to the suite run.</p>
   */
  tags?: Record<string, string>;
}

export namespace StartSuiteRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSuiteRunRequest): any => ({
    ...obj,
  });
}

export interface StartSuiteRunResponse {
  /**
   * <p>Suite Run ID of the started suite run.</p>
   */
  suiteRunId?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the started suite run.</p>
   */
  suiteRunArn?: string;

  /**
   * <p>Starts a Device Advisor test suite run based on suite create time.</p>
   */
  createdAt?: Date;
}

export namespace StartSuiteRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartSuiteRunResponse): any => ({
    ...obj,
  });
}

export interface StopSuiteRunRequest {
  /**
   * <p>Suite definition ID of the test suite run to be stopped.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Suite run ID of the test suite run to be stopped.</p>
   */
  suiteRunId: string | undefined;
}

export namespace StopSuiteRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSuiteRunRequest): any => ({
    ...obj,
  });
}

export interface StopSuiteRunResponse {}

export namespace StopSuiteRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopSuiteRunResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The resource ARN of an IoT Device Advisor resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be attached to the IoT Device Advisor resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The resource ARN of an IoT Device Advisor resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>List of tag keys to remove from the IoT Device Advisor resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateSuiteDefinitionRequest {
  /**
   * <p>Suite definition ID of the test suite to be updated.</p>
   */
  suiteDefinitionId: string | undefined;

  /**
   * <p>Updates a Device Advisor test suite with suite definition configuration.</p>
   */
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
}

export namespace UpdateSuiteDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSuiteDefinitionRequest): any => ({
    ...obj,
  });
}

export interface UpdateSuiteDefinitionResponse {
  /**
   * <p>Suite definition ID of the updated test suite.</p>
   */
  suiteDefinitionId?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the updated test suite.</p>
   */
  suiteDefinitionArn?: string;

  /**
   * <p>Suite definition name of the updated test suite.</p>
   */
  suiteDefinitionName?: string;

  /**
   * <p>Suite definition version of the updated test suite.</p>
   */
  suiteDefinitionVersion?: string;

  /**
   * <p>Timestamp of when the test suite was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Timestamp of when the test suite was updated.</p>
   */
  lastUpdatedAt?: Date;
}

export namespace UpdateSuiteDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSuiteDefinitionResponse): any => ({
    ...obj,
  });
}
