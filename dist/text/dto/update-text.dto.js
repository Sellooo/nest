"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTextDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_text_dto_1 = require("./create-text.dto");
class UpdateTextDto extends (0, mapped_types_1.PartialType)(create_text_dto_1.CreateTextDto) {
}
exports.UpdateTextDto = UpdateTextDto;
//# sourceMappingURL=update-text.dto.js.map