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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DisassociateAdminAccountRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateAdminAccountCommand,
  serializeAws_json1_1DisassociateAdminAccountCommand,
} from "../protocols/Aws_json1_1";

export interface DisassociateAdminAccountCommandInput extends DisassociateAdminAccountRequest {}
export interface DisassociateAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates the account that has been set as the Firewall Manager administrator
 *       account. To set a different account as the administrator account, you must submit an
 *         <code>AssociateAdminAccount</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DisassociateAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DisassociateAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DisassociateAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class DisassociateAdminAccountCommand extends $Command<
  DisassociateAdminAccountCommandInput,
  DisassociateAdminAccountCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateAdminAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateAdminAccountCommandInput, DisassociateAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "DisassociateAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateAdminAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateAdminAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateAdminAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateAdminAccountCommandOutput> {
    return deserializeAws_json1_1DisassociateAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
