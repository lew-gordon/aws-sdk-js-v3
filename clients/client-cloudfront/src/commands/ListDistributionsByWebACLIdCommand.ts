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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListDistributionsByWebACLIdRequest, ListDistributionsByWebACLIdResult } from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByWebACLIdCommand,
  serializeAws_restXmlListDistributionsByWebACLIdCommand,
} from "../protocols/Aws_restXml";

export interface ListDistributionsByWebACLIdCommandInput extends ListDistributionsByWebACLIdRequest {}
export interface ListDistributionsByWebACLIdCommandOutput extends ListDistributionsByWebACLIdResult, __MetadataBearer {}

/**
 * <p>List the distributions that are associated with a specified WAF web ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByWebACLIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByWebACLIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListDistributionsByWebACLIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionsByWebACLIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByWebACLIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class ListDistributionsByWebACLIdCommand extends $Command<
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDistributionsByWebACLIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDistributionsByWebACLIdCommandInput, ListDistributionsByWebACLIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListDistributionsByWebACLIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDistributionsByWebACLIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByWebACLIdResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDistributionsByWebACLIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListDistributionsByWebACLIdCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDistributionsByWebACLIdCommandOutput> {
    return deserializeAws_restXmlListDistributionsByWebACLIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
