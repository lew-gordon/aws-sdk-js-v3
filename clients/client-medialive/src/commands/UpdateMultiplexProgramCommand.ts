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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateMultiplexProgramRequest, UpdateMultiplexProgramResponse } from "../models/models_2";
import {
  deserializeAws_restJson1UpdateMultiplexProgramCommand,
  serializeAws_restJson1UpdateMultiplexProgramCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateMultiplexProgramCommandInput extends UpdateMultiplexProgramRequest {}
export interface UpdateMultiplexProgramCommandOutput extends UpdateMultiplexProgramResponse, __MetadataBearer {}

/**
 * Update a program in a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link UpdateMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 */
export class UpdateMultiplexProgramCommand extends $Command<
  UpdateMultiplexProgramCommandInput,
  UpdateMultiplexProgramCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMultiplexProgramCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMultiplexProgramCommandInput, UpdateMultiplexProgramCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "UpdateMultiplexProgramCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMultiplexProgramRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMultiplexProgramResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMultiplexProgramCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateMultiplexProgramCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMultiplexProgramCommandOutput> {
    return deserializeAws_restJson1UpdateMultiplexProgramCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
