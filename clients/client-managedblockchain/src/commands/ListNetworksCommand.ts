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

import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import { ListNetworksInput, ListNetworksOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListNetworksCommand,
  serializeAws_restJson1ListNetworksCommand,
} from "../protocols/Aws_restJson1";

export interface ListNetworksCommandInput extends ListNetworksInput {}
export interface ListNetworksCommandOutput extends ListNetworksOutput, __MetadataBearer {}

/**
 * <p>Returns information about the networks in which the current AWS account participates.</p>
 *          <p>Applies to Hyperledger Fabric and Ethereum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListNetworksCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListNetworksCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new ListNetworksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNetworksCommandInput} for command's `input` shape.
 * @see {@link ListNetworksCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 */
export class ListNetworksCommand extends $Command<
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
  ManagedBlockchainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNetworksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNetworksCommandInput, ListNetworksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "ListNetworksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNetworksInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListNetworksOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNetworksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNetworksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNetworksCommandOutput> {
    return deserializeAws_restJson1ListNetworksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
