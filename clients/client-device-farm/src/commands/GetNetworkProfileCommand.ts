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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetNetworkProfileRequest, GetNetworkProfileResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetNetworkProfileCommand,
  serializeAws_json1_1GetNetworkProfileCommand,
} from "../protocols/Aws_json1_1";

export interface GetNetworkProfileCommandInput extends GetNetworkProfileRequest {}
export interface GetNetworkProfileCommandOutput extends GetNetworkProfileResult, __MetadataBearer {}

/**
 * <p>Returns information about a network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetNetworkProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetNetworkProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetNetworkProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link GetNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class GetNetworkProfileCommand extends $Command<
  GetNetworkProfileCommandInput,
  GetNetworkProfileCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetNetworkProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetNetworkProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNetworkProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetNetworkProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetNetworkProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetNetworkProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNetworkProfileCommandOutput> {
    return deserializeAws_json1_1GetNetworkProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
