// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { DescribeImportTasksRequest, DescribeImportTasksResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeImportTasksCommand,
  serializeAws_json1_1DescribeImportTasksCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeImportTasksCommandInput extends DescribeImportTasksRequest {}
export interface DescribeImportTasksCommandOutput extends DescribeImportTasksResponse, __MetadataBearer {}

/**
 * <p>Returns an array of import tasks for your account, including status information, times,
 *       IDs, the Amazon S3 Object URL for the import file, and more.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeImportTasksCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeImportTasksCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DescribeImportTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportTasksCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 */
export class DescribeImportTasksCommand extends $Command<
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeImportTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImportTasksCommandInput, DescribeImportTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeImportTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImportTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImportTasksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeImportTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeImportTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImportTasksCommandOutput> {
    return deserializeAws_json1_1DescribeImportTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
