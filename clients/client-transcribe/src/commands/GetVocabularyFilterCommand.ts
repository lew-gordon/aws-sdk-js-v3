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

import { GetVocabularyFilterRequest, GetVocabularyFilterResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetVocabularyFilterCommand,
  serializeAws_json1_1GetVocabularyFilterCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

export interface GetVocabularyFilterCommandInput extends GetVocabularyFilterRequest {}
export interface GetVocabularyFilterCommandOutput extends GetVocabularyFilterResponse, __MetadataBearer {}

/**
 * <p>Provides information about the specified custom vocabulary filter.</p>
 *         <p>To view the status of the specified vocabulary filter, check the <code>VocabularyState</code>
 *             field. If the status is <code>READY</code>, your vocabulary is available to use. If the status is
 *             <code>FAILED</code>, <code>FailureReason</code> provides details on why your vocabulary
 *             filter failed.</p>
 *         <p>To get a list of your custom vocabulary filters, use the
 *              operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, GetVocabularyFilterCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, GetVocabularyFilterCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new GetVocabularyFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVocabularyFilterCommandInput} for command's `input` shape.
 * @see {@link GetVocabularyFilterCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 */
export class GetVocabularyFilterCommand extends $Command<
  GetVocabularyFilterCommandInput,
  GetVocabularyFilterCommandOutput,
  TranscribeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVocabularyFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetVocabularyFilterCommandInput, GetVocabularyFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "GetVocabularyFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVocabularyFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetVocabularyFilterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVocabularyFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetVocabularyFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVocabularyFilterCommandOutput> {
    return deserializeAws_json1_1GetVocabularyFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
