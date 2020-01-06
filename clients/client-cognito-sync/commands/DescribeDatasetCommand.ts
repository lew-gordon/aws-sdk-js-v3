import {
  CognitoSyncClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CognitoSyncClient";
import {
  DescribeDatasetRequest,
  DescribeDatasetResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1DescribeDatasetCommand,
  serializeAws_restJson1_1DescribeDatasetCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DescribeDatasetCommandInput = DescribeDatasetRequest;
export type DescribeDatasetCommandOutput = DescribeDatasetResponse;

export class DescribeDatasetCommand extends $Command<
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDatasetCommandInput, DescribeDatasetCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDatasetCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeDatasetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeDatasetCommandOutput> {
    return deserializeAws_restJson1_1DescribeDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
