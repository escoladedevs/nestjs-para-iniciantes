import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseDto {
    @ApiProperty({type: Number, description: 'ID'})
    readonly id: number;
    @ApiProperty({type: String, description: 'Title of the Course'})
    readonly title: string;
    @ApiProperty({type: String, description: 'Description of the Course'})
    readonly description: string;
}