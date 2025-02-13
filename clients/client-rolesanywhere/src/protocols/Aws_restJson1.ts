// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseRfc3339DateTime as __parseRfc3339DateTime,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { CreateTrustAnchorCommandInput, CreateTrustAnchorCommandOutput } from "../commands/CreateTrustAnchorCommand";
import { DeleteCrlCommandInput, DeleteCrlCommandOutput } from "../commands/DeleteCrlCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import { DeleteTrustAnchorCommandInput, DeleteTrustAnchorCommandOutput } from "../commands/DeleteTrustAnchorCommand";
import { DisableCrlCommandInput, DisableCrlCommandOutput } from "../commands/DisableCrlCommand";
import { DisableProfileCommandInput, DisableProfileCommandOutput } from "../commands/DisableProfileCommand";
import { DisableTrustAnchorCommandInput, DisableTrustAnchorCommandOutput } from "../commands/DisableTrustAnchorCommand";
import { EnableCrlCommandInput, EnableCrlCommandOutput } from "../commands/EnableCrlCommand";
import { EnableProfileCommandInput, EnableProfileCommandOutput } from "../commands/EnableProfileCommand";
import { EnableTrustAnchorCommandInput, EnableTrustAnchorCommandOutput } from "../commands/EnableTrustAnchorCommand";
import { GetCrlCommandInput, GetCrlCommandOutput } from "../commands/GetCrlCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "../commands/GetProfileCommand";
import { GetSubjectCommandInput, GetSubjectCommandOutput } from "../commands/GetSubjectCommand";
import { GetTrustAnchorCommandInput, GetTrustAnchorCommandOutput } from "../commands/GetTrustAnchorCommand";
import { ImportCrlCommandInput, ImportCrlCommandOutput } from "../commands/ImportCrlCommand";
import { ListCrlsCommandInput, ListCrlsCommandOutput } from "../commands/ListCrlsCommand";
import { ListProfilesCommandInput, ListProfilesCommandOutput } from "../commands/ListProfilesCommand";
import { ListSubjectsCommandInput, ListSubjectsCommandOutput } from "../commands/ListSubjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTrustAnchorsCommandInput, ListTrustAnchorsCommandOutput } from "../commands/ListTrustAnchorsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCrlCommandInput, UpdateCrlCommandOutput } from "../commands/UpdateCrlCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import { UpdateTrustAnchorCommandInput, UpdateTrustAnchorCommandOutput } from "../commands/UpdateTrustAnchorCommand";
import {
  AccessDeniedException,
  CredentialSummary,
  CrlDetail,
  InstanceProperty,
  ProfileDetail,
  ResourceNotFoundException,
  Source,
  SourceData,
  SubjectDetail,
  SubjectSummary,
  Tag,
  TooManyTagsException,
  TrustAnchorDetail,
  ValidationException,
} from "../models/models_0";
import { RolesAnywhereServiceException as __BaseException } from "../models/RolesAnywhereServiceException";

export const serializeAws_restJson1CreateProfileCommand = async (
  input: CreateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profiles";
  let body: any;
  body = JSON.stringify({
    ...(input.durationSeconds !== undefined &&
      input.durationSeconds !== null && { durationSeconds: input.durationSeconds }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.managedPolicyArns !== undefined &&
      input.managedPolicyArns !== null && {
        managedPolicyArns: serializeAws_restJson1ManagedPolicyList(input.managedPolicyArns, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.requireInstanceProperties !== undefined &&
      input.requireInstanceProperties !== null && { requireInstanceProperties: input.requireInstanceProperties }),
    ...(input.roleArns !== undefined &&
      input.roleArns !== null && { roleArns: serializeAws_restJson1RoleArnList(input.roleArns, context) }),
    ...(input.sessionPolicy !== undefined && input.sessionPolicy !== null && { sessionPolicy: input.sessionPolicy }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateTrustAnchorCommand = async (
  input: CreateTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchors";
  let body: any;
  body = JSON.stringify({
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.source !== undefined &&
      input.source !== null && { source: serializeAws_restJson1Source(input.source, context) }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteCrlCommand = async (
  input: DeleteCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crl/{crlId}";
  if (input.crlId !== undefined) {
    const labelValue: string = input.crlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: crlId.");
    }
    resolvedPath = resolvedPath.replace("{crlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: crlId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profile/{profileId}";
  if (input.profileId !== undefined) {
    const labelValue: string = input.profileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileId.");
    }
    resolvedPath = resolvedPath.replace("{profileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteTrustAnchorCommand = async (
  input: DeleteTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchor/{trustAnchorId}";
  if (input.trustAnchorId !== undefined) {
    const labelValue: string = input.trustAnchorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: trustAnchorId.");
    }
    resolvedPath = resolvedPath.replace("{trustAnchorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: trustAnchorId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisableCrlCommand = async (
  input: DisableCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crl/{crlId}/disable";
  if (input.crlId !== undefined) {
    const labelValue: string = input.crlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: crlId.");
    }
    resolvedPath = resolvedPath.replace("{crlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: crlId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisableProfileCommand = async (
  input: DisableProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profile/{profileId}/disable";
  if (input.profileId !== undefined) {
    const labelValue: string = input.profileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileId.");
    }
    resolvedPath = resolvedPath.replace("{profileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisableTrustAnchorCommand = async (
  input: DisableTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchor/{trustAnchorId}/disable";
  if (input.trustAnchorId !== undefined) {
    const labelValue: string = input.trustAnchorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: trustAnchorId.");
    }
    resolvedPath = resolvedPath.replace("{trustAnchorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: trustAnchorId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EnableCrlCommand = async (
  input: EnableCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crl/{crlId}/enable";
  if (input.crlId !== undefined) {
    const labelValue: string = input.crlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: crlId.");
    }
    resolvedPath = resolvedPath.replace("{crlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: crlId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EnableProfileCommand = async (
  input: EnableProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profile/{profileId}/enable";
  if (input.profileId !== undefined) {
    const labelValue: string = input.profileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileId.");
    }
    resolvedPath = resolvedPath.replace("{profileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EnableTrustAnchorCommand = async (
  input: EnableTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchor/{trustAnchorId}/enable";
  if (input.trustAnchorId !== undefined) {
    const labelValue: string = input.trustAnchorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: trustAnchorId.");
    }
    resolvedPath = resolvedPath.replace("{trustAnchorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: trustAnchorId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetCrlCommand = async (
  input: GetCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crl/{crlId}";
  if (input.crlId !== undefined) {
    const labelValue: string = input.crlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: crlId.");
    }
    resolvedPath = resolvedPath.replace("{crlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: crlId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetProfileCommand = async (
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profile/{profileId}";
  if (input.profileId !== undefined) {
    const labelValue: string = input.profileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileId.");
    }
    resolvedPath = resolvedPath.replace("{profileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetSubjectCommand = async (
  input: GetSubjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/subject/{subjectId}";
  if (input.subjectId !== undefined) {
    const labelValue: string = input.subjectId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: subjectId.");
    }
    resolvedPath = resolvedPath.replace("{subjectId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: subjectId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetTrustAnchorCommand = async (
  input: GetTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchor/{trustAnchorId}";
  if (input.trustAnchorId !== undefined) {
    const labelValue: string = input.trustAnchorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: trustAnchorId.");
    }
    resolvedPath = resolvedPath.replace("{trustAnchorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: trustAnchorId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ImportCrlCommand = async (
  input: ImportCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crls";
  let body: any;
  body = JSON.stringify({
    ...(input.crlData !== undefined && input.crlData !== null && { crlData: context.base64Encoder(input.crlData) }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.trustAnchorArn !== undefined &&
      input.trustAnchorArn !== null && { trustAnchorArn: input.trustAnchorArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListCrlsCommand = async (
  input: ListCrlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crls";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.pageSize !== undefined && { pageSize: input.pageSize.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListProfilesCommand = async (
  input: ListProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profiles";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.pageSize !== undefined && { pageSize: input.pageSize.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListSubjectsCommand = async (
  input: ListSubjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/subjects";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.pageSize !== undefined && { pageSize: input.pageSize.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListTagsForResource";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTrustAnchorsCommand = async (
  input: ListTrustAnchorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchors";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.pageSize !== undefined && { pageSize: input.pageSize.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UntagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined &&
      input.tagKeys !== null && { tagKeys: serializeAws_restJson1TagKeyList(input.tagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateCrlCommand = async (
  input: UpdateCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crl/{crlId}";
  if (input.crlId !== undefined) {
    const labelValue: string = input.crlId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: crlId.");
    }
    resolvedPath = resolvedPath.replace("{crlId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: crlId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.crlData !== undefined && input.crlData !== null && { crlData: context.base64Encoder(input.crlData) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profile/{profileId}";
  if (input.profileId !== undefined) {
    const labelValue: string = input.profileId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: profileId.");
    }
    resolvedPath = resolvedPath.replace("{profileId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: profileId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.durationSeconds !== undefined &&
      input.durationSeconds !== null && { durationSeconds: input.durationSeconds }),
    ...(input.managedPolicyArns !== undefined &&
      input.managedPolicyArns !== null && {
        managedPolicyArns: serializeAws_restJson1ManagedPolicyList(input.managedPolicyArns, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.roleArns !== undefined &&
      input.roleArns !== null && { roleArns: serializeAws_restJson1RoleArnList(input.roleArns, context) }),
    ...(input.sessionPolicy !== undefined && input.sessionPolicy !== null && { sessionPolicy: input.sessionPolicy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateTrustAnchorCommand = async (
  input: UpdateTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchor/{trustAnchorId}";
  if (input.trustAnchorId !== undefined) {
    const labelValue: string = input.trustAnchorId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: trustAnchorId.");
    }
    resolvedPath = resolvedPath.replace("{trustAnchorId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: trustAnchorId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.source !== undefined &&
      input.source !== null && { source: serializeAws_restJson1Source(input.source, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProfileCommandError(output, context);
  }
  const contents: CreateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    profile: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile !== undefined && data.profile !== null) {
    contents.profile = deserializeAws_restJson1ProfileDetail(data.profile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustAnchorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTrustAnchorCommandError(output, context);
  }
  const contents: CreateTrustAnchorCommandOutput = {
    $metadata: deserializeMetadata(output),
    trustAnchor: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor !== undefined && data.trustAnchor !== null) {
    contents.trustAnchor = deserializeAws_restJson1TrustAnchorDetail(data.trustAnchor, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCrlCommandError(output, context);
  }
  const contents: DeleteCrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    crl: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl !== undefined && data.crl !== null) {
    contents.crl = deserializeAws_restJson1CrlDetail(data.crl, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProfileCommandError(output, context);
  }
  const contents: DeleteProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    profile: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile !== undefined && data.profile !== null) {
    contents.profile = deserializeAws_restJson1ProfileDetail(data.profile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTrustAnchorCommandError(output, context);
  }
  const contents: DeleteTrustAnchorCommandOutput = {
    $metadata: deserializeMetadata(output),
    trustAnchor: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor !== undefined && data.trustAnchor !== null) {
    contents.trustAnchor = deserializeAws_restJson1TrustAnchorDetail(data.trustAnchor, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisableCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableCrlCommandError(output, context);
  }
  const contents: DisableCrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    crl: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl !== undefined && data.crl !== null) {
    contents.crl = deserializeAws_restJson1CrlDetail(data.crl, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisableProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableProfileCommandError(output, context);
  }
  const contents: DisableProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    profile: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile !== undefined && data.profile !== null) {
    contents.profile = deserializeAws_restJson1ProfileDetail(data.profile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisableTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableTrustAnchorCommandError(output, context);
  }
  const contents: DisableTrustAnchorCommandOutput = {
    $metadata: deserializeMetadata(output),
    trustAnchor: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor !== undefined && data.trustAnchor !== null) {
    contents.trustAnchor = deserializeAws_restJson1TrustAnchorDetail(data.trustAnchor, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisableTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1EnableCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableCrlCommandError(output, context);
  }
  const contents: EnableCrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    crl: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl !== undefined && data.crl !== null) {
    contents.crl = deserializeAws_restJson1CrlDetail(data.crl, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1EnableProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableProfileCommandError(output, context);
  }
  const contents: EnableProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    profile: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile !== undefined && data.profile !== null) {
    contents.profile = deserializeAws_restJson1ProfileDetail(data.profile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1EnableTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableTrustAnchorCommandError(output, context);
  }
  const contents: EnableTrustAnchorCommandOutput = {
    $metadata: deserializeMetadata(output),
    trustAnchor: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor !== undefined && data.trustAnchor !== null) {
    contents.trustAnchor = deserializeAws_restJson1TrustAnchorDetail(data.trustAnchor, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EnableTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCrlCommandError(output, context);
  }
  const contents: GetCrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    crl: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl !== undefined && data.crl !== null) {
    contents.crl = deserializeAws_restJson1CrlDetail(data.crl, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProfileCommandError(output, context);
  }
  const contents: GetProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    profile: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile !== undefined && data.profile !== null) {
    contents.profile = deserializeAws_restJson1ProfileDetail(data.profile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetSubjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSubjectCommandError(output, context);
  }
  const contents: GetSubjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    subject: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.subject !== undefined && data.subject !== null) {
    contents.subject = deserializeAws_restJson1SubjectDetail(data.subject, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSubjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTrustAnchorCommandError(output, context);
  }
  const contents: GetTrustAnchorCommandOutput = {
    $metadata: deserializeMetadata(output),
    trustAnchor: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor !== undefined && data.trustAnchor !== null) {
    contents.trustAnchor = deserializeAws_restJson1TrustAnchorDetail(data.trustAnchor, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ImportCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCrlCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportCrlCommandError(output, context);
  }
  const contents: ImportCrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    crl: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl !== undefined && data.crl !== null) {
    contents.crl = deserializeAws_restJson1CrlDetail(data.crl, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ImportCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListCrlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCrlsCommandError(output, context);
  }
  const contents: ListCrlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    crls: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crls !== undefined && data.crls !== null) {
    contents.crls = deserializeAws_restJson1CrlDetails(data.crls, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCrlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProfilesCommandError(output, context);
  }
  const contents: ListProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    profiles: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.profiles !== undefined && data.profiles !== null) {
    contents.profiles = deserializeAws_restJson1ProfileDetails(data.profiles, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListSubjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSubjectsCommandError(output, context);
  }
  const contents: ListSubjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    subjects: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.subjects !== undefined && data.subjects !== null) {
    contents.subjects = deserializeAws_restJson1SubjectSummaries(data.subjects, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSubjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTrustAnchorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustAnchorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTrustAnchorsCommandError(output, context);
  }
  const contents: ListTrustAnchorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    trustAnchors: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.trustAnchors !== undefined && data.trustAnchors !== null) {
    contents.trustAnchors = deserializeAws_restJson1TrustAnchorDetails(data.trustAnchors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTrustAnchorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustAnchorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.rolesanywhere#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCrlCommandError(output, context);
  }
  const contents: UpdateCrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    crl: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl !== undefined && data.crl !== null) {
    contents.crl = deserializeAws_restJson1CrlDetail(data.crl, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProfileCommandError(output, context);
  }
  const contents: UpdateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    profile: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile !== undefined && data.profile !== null) {
    contents.profile = deserializeAws_restJson1ProfileDetail(data.profile, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTrustAnchorCommandError(output, context);
  }
  const contents: UpdateTrustAnchorCommandOutput = {
    $metadata: deserializeMetadata(output),
    trustAnchor: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor !== undefined && data.trustAnchor !== null) {
    contents.trustAnchor = deserializeAws_restJson1TrustAnchorDetail(data.trustAnchor, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ManagedPolicyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1RoleArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.sourceData !== undefined &&
      input.sourceData !== null && { sourceData: serializeAws_restJson1SourceData(input.sourceData, context) }),
    ...(input.sourceType !== undefined && input.sourceType !== null && { sourceType: input.sourceType }),
  };
};

const serializeAws_restJson1SourceData = (input: SourceData, context: __SerdeContext): any => {
  return SourceData.visit(input, {
    acmPcaArn: (value) => ({ acmPcaArn: value }),
    x509CertificateData: (value) => ({ x509CertificateData: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1CredentialSummaries = (output: any, context: __SerdeContext): CredentialSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CredentialSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CredentialSummary = (output: any, context: __SerdeContext): CredentialSummary => {
  return {
    enabled: __expectBoolean(output.enabled),
    failed: __expectBoolean(output.failed),
    issuer: __expectString(output.issuer),
    seenAt:
      output.seenAt !== undefined && output.seenAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.seenAt))
        : undefined,
    serialNumber: __expectString(output.serialNumber),
    x509CertificateData: __expectString(output.x509CertificateData),
  } as any;
};

const deserializeAws_restJson1CrlDetail = (output: any, context: __SerdeContext): CrlDetail => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.createdAt))
        : undefined,
    crlArn: __expectString(output.crlArn),
    crlData:
      output.crlData !== undefined && output.crlData !== null ? context.base64Decoder(output.crlData) : undefined,
    crlId: __expectString(output.crlId),
    enabled: __expectBoolean(output.enabled),
    name: __expectString(output.name),
    trustAnchorArn: __expectString(output.trustAnchorArn),
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt))
        : undefined,
  } as any;
};

const deserializeAws_restJson1CrlDetails = (output: any, context: __SerdeContext): CrlDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CrlDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InstanceProperties = (output: any, context: __SerdeContext): InstanceProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstanceProperty(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InstanceProperty = (output: any, context: __SerdeContext): InstanceProperty => {
  return {
    failed: __expectBoolean(output.failed),
    properties:
      output.properties !== undefined && output.properties !== null
        ? deserializeAws_restJson1InstancePropertyMap(output.properties, context)
        : undefined,
    seenAt:
      output.seenAt !== undefined && output.seenAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.seenAt))
        : undefined,
  } as any;
};

const deserializeAws_restJson1InstancePropertyMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1ManagedPolicyList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ProfileDetail = (output: any, context: __SerdeContext): ProfileDetail => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.createdAt))
        : undefined,
    createdBy: __expectString(output.createdBy),
    durationSeconds: __expectInt32(output.durationSeconds),
    enabled: __expectBoolean(output.enabled),
    managedPolicyArns:
      output.managedPolicyArns !== undefined && output.managedPolicyArns !== null
        ? deserializeAws_restJson1ManagedPolicyList(output.managedPolicyArns, context)
        : undefined,
    name: __expectString(output.name),
    profileArn: __expectString(output.profileArn),
    profileId: __expectString(output.profileId),
    requireInstanceProperties: __expectBoolean(output.requireInstanceProperties),
    roleArns:
      output.roleArns !== undefined && output.roleArns !== null
        ? deserializeAws_restJson1RoleArnList(output.roleArns, context)
        : undefined,
    sessionPolicy: __expectString(output.sessionPolicy),
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProfileDetails = (output: any, context: __SerdeContext): ProfileDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProfileDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RoleArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Source = (output: any, context: __SerdeContext): Source => {
  return {
    sourceData:
      output.sourceData !== undefined && output.sourceData !== null
        ? deserializeAws_restJson1SourceData(__expectUnion(output.sourceData), context)
        : undefined,
    sourceType: __expectString(output.sourceType),
  } as any;
};

const deserializeAws_restJson1SourceData = (output: any, context: __SerdeContext): SourceData => {
  if (__expectString(output.acmPcaArn) !== undefined) {
    return { acmPcaArn: __expectString(output.acmPcaArn) as any };
  }
  if (__expectString(output.x509CertificateData) !== undefined) {
    return { x509CertificateData: __expectString(output.x509CertificateData) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1SubjectDetail = (output: any, context: __SerdeContext): SubjectDetail => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.createdAt))
        : undefined,
    credentials:
      output.credentials !== undefined && output.credentials !== null
        ? deserializeAws_restJson1CredentialSummaries(output.credentials, context)
        : undefined,
    enabled: __expectBoolean(output.enabled),
    instanceProperties:
      output.instanceProperties !== undefined && output.instanceProperties !== null
        ? deserializeAws_restJson1InstanceProperties(output.instanceProperties, context)
        : undefined,
    lastSeenAt:
      output.lastSeenAt !== undefined && output.lastSeenAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.lastSeenAt))
        : undefined,
    subjectArn: __expectString(output.subjectArn),
    subjectId: __expectString(output.subjectId),
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt))
        : undefined,
    x509Subject: __expectString(output.x509Subject),
  } as any;
};

const deserializeAws_restJson1SubjectSummaries = (output: any, context: __SerdeContext): SubjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SubjectSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SubjectSummary = (output: any, context: __SerdeContext): SubjectSummary => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.createdAt))
        : undefined,
    enabled: __expectBoolean(output.enabled),
    lastSeenAt:
      output.lastSeenAt !== undefined && output.lastSeenAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.lastSeenAt))
        : undefined,
    subjectArn: __expectString(output.subjectArn),
    subjectId: __expectString(output.subjectId),
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt))
        : undefined,
    x509Subject: __expectString(output.x509Subject),
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TrustAnchorDetail = (output: any, context: __SerdeContext): TrustAnchorDetail => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.createdAt))
        : undefined,
    enabled: __expectBoolean(output.enabled),
    name: __expectString(output.name),
    source:
      output.source !== undefined && output.source !== null
        ? deserializeAws_restJson1Source(output.source, context)
        : undefined,
    trustAnchorArn: __expectString(output.trustAnchorArn),
    trustAnchorId: __expectString(output.trustAnchorId),
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.updatedAt))
        : undefined,
  } as any;
};

const deserializeAws_restJson1TrustAnchorDetails = (output: any, context: __SerdeContext): TrustAnchorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TrustAnchorDetail(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
