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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergeBranchesByFastForwardInput, MergeBranchesByFastForwardOutput } from "../models/models_1";
import {
  deserializeAws_json1_1MergeBranchesByFastForwardCommand,
  serializeAws_json1_1MergeBranchesByFastForwardCommand,
} from "../protocols/Aws_json1_1";

export interface MergeBranchesByFastForwardCommandInput extends MergeBranchesByFastForwardInput {}
export interface MergeBranchesByFastForwardCommandOutput extends MergeBranchesByFastForwardOutput, __MetadataBearer {}

/**
 * <p>Merges two branches using the fast-forward merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergeBranchesByFastForwardCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergeBranchesByFastForwardCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergeBranchesByFastForwardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeBranchesByFastForwardCommandInput} for command's `input` shape.
 * @see {@link MergeBranchesByFastForwardCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class MergeBranchesByFastForwardCommand extends $Command<
  MergeBranchesByFastForwardCommandInput,
  MergeBranchesByFastForwardCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MergeBranchesByFastForwardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MergeBranchesByFastForwardCommandInput, MergeBranchesByFastForwardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "MergeBranchesByFastForwardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergeBranchesByFastForwardInput.filterSensitiveLog,
      outputFilterSensitiveLog: MergeBranchesByFastForwardOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergeBranchesByFastForwardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergeBranchesByFastForwardCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<MergeBranchesByFastForwardCommandOutput> {
    return deserializeAws_json1_1MergeBranchesByFastForwardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
