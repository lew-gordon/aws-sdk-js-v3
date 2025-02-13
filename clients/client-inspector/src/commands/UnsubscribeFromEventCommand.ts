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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { UnsubscribeFromEventRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UnsubscribeFromEventCommand,
  serializeAws_json1_1UnsubscribeFromEventCommand,
} from "../protocols/Aws_json1_1";

export interface UnsubscribeFromEventCommandInput extends UnsubscribeFromEventRequest {}
export interface UnsubscribeFromEventCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables the process of sending Amazon Simple Notification Service (SNS)
 *          notifications about a specified event to a specified SNS topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, UnsubscribeFromEventCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, UnsubscribeFromEventCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new UnsubscribeFromEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnsubscribeFromEventCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeFromEventCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class UnsubscribeFromEventCommand extends $Command<
  UnsubscribeFromEventCommandInput,
  UnsubscribeFromEventCommandOutput,
  InspectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnsubscribeFromEventCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnsubscribeFromEventCommandInput, UnsubscribeFromEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "UnsubscribeFromEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnsubscribeFromEventRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnsubscribeFromEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UnsubscribeFromEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnsubscribeFromEventCommandOutput> {
    return deserializeAws_json1_1UnsubscribeFromEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
