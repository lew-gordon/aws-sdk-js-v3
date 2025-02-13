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
  DescribeModelExplainabilityJobDefinitionRequest,
  DescribeModelExplainabilityJobDefinitionResponse,
} from "../models/models_2";
import {
  deserializeAws_json1_1DescribeModelExplainabilityJobDefinitionCommand,
  serializeAws_json1_1DescribeModelExplainabilityJobDefinitionCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface DescribeModelExplainabilityJobDefinitionCommandInput
  extends DescribeModelExplainabilityJobDefinitionRequest {}
export interface DescribeModelExplainabilityJobDefinitionCommandOutput
  extends DescribeModelExplainabilityJobDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Returns a description of a model explainability job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelExplainabilityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelExplainabilityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeModelExplainabilityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelExplainabilityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeModelExplainabilityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class DescribeModelExplainabilityJobDefinitionCommand extends $Command<
  DescribeModelExplainabilityJobDefinitionCommandInput,
  DescribeModelExplainabilityJobDefinitionCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeModelExplainabilityJobDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeModelExplainabilityJobDefinitionCommandInput,
    DescribeModelExplainabilityJobDefinitionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeModelExplainabilityJobDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeModelExplainabilityJobDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeModelExplainabilityJobDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeModelExplainabilityJobDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeModelExplainabilityJobDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeModelExplainabilityJobDefinitionCommandOutput> {
    return deserializeAws_json1_1DescribeModelExplainabilityJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
