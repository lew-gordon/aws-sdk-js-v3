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

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { CreateQuantumTaskRequest, CreateQuantumTaskResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateQuantumTaskCommand,
  serializeAws_restJson1CreateQuantumTaskCommand,
} from "../protocols/Aws_restJson1";

export interface CreateQuantumTaskCommandInput extends CreateQuantumTaskRequest {}
export interface CreateQuantumTaskCommandOutput extends CreateQuantumTaskResponse, __MetadataBearer {}

/**
 * <p>Creates a quantum task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, CreateQuantumTaskCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, CreateQuantumTaskCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * const client = new BraketClient(config);
 * const command = new CreateQuantumTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQuantumTaskCommandInput} for command's `input` shape.
 * @see {@link CreateQuantumTaskCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 */
export class CreateQuantumTaskCommand extends $Command<
  CreateQuantumTaskCommandInput,
  CreateQuantumTaskCommandOutput,
  BraketClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateQuantumTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BraketClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateQuantumTaskCommandInput, CreateQuantumTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BraketClient";
    const commandName = "CreateQuantumTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateQuantumTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateQuantumTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateQuantumTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateQuantumTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateQuantumTaskCommandOutput> {
    return deserializeAws_restJson1CreateQuantumTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
