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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DescribeRefreshSchemasStatusMessage, DescribeRefreshSchemasStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRefreshSchemasStatusCommand,
  serializeAws_json1_1DescribeRefreshSchemasStatusCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeRefreshSchemasStatusCommandInput extends DescribeRefreshSchemasStatusMessage {}
export interface DescribeRefreshSchemasStatusCommandOutput
  extends DescribeRefreshSchemasStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns the status of the RefreshSchemas operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeRefreshSchemasStatusCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeRefreshSchemasStatusCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeRefreshSchemasStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRefreshSchemasStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeRefreshSchemasStatusCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class DescribeRefreshSchemasStatusCommand extends $Command<
  DescribeRefreshSchemasStatusCommandInput,
  DescribeRefreshSchemasStatusCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRefreshSchemasStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRefreshSchemasStatusCommandInput, DescribeRefreshSchemasStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeRefreshSchemasStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRefreshSchemasStatusMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRefreshSchemasStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRefreshSchemasStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRefreshSchemasStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRefreshSchemasStatusCommandOutput> {
    return deserializeAws_json1_1DescribeRefreshSchemasStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
