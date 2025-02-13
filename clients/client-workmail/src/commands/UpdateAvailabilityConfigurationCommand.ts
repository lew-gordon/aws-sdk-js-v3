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

import { UpdateAvailabilityConfigurationRequest, UpdateAvailabilityConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAvailabilityConfigurationCommand,
  serializeAws_json1_1UpdateAvailabilityConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface UpdateAvailabilityConfigurationCommandInput extends UpdateAvailabilityConfigurationRequest {}
export interface UpdateAvailabilityConfigurationCommandOutput
  extends UpdateAvailabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing <code>AvailabilityConfiguration</code> for the given WorkMail
 *          organization and domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateAvailabilityConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateAvailabilityConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new UpdateAvailabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAvailabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAvailabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class UpdateAvailabilityConfigurationCommand extends $Command<
  UpdateAvailabilityConfigurationCommandInput,
  UpdateAvailabilityConfigurationCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAvailabilityConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAvailabilityConfigurationCommandInput, UpdateAvailabilityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "UpdateAvailabilityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAvailabilityConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAvailabilityConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateAvailabilityConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAvailabilityConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAvailabilityConfigurationCommandOutput> {
    return deserializeAws_json1_1UpdateAvailabilityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
