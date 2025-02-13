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

import { ProfileDetailResponse, ScalarProfileRequest } from "../models/models_0";
import {
  deserializeAws_restJson1EnableProfileCommand,
  serializeAws_restJson1EnableProfileCommand,
} from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

export interface EnableProfileCommandInput extends ScalarProfileRequest {}
export interface EnableProfileCommandOutput extends ProfileDetailResponse, __MetadataBearer {}

/**
 * <p>Enables the roles in a profile to receive session credentials in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a>. </p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:EnableProfile</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, EnableProfileCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, EnableProfileCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const command = new EnableProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableProfileCommandInput} for command's `input` shape.
 * @see {@link EnableProfileCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 */
export class EnableProfileCommand extends $Command<
  EnableProfileCommandInput,
  EnableProfileCommandOutput,
  RolesAnywhereClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RolesAnywhereClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableProfileCommandInput, EnableProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "EnableProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ScalarProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ProfileDetailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableProfileCommandOutput> {
    return deserializeAws_restJson1EnableProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
