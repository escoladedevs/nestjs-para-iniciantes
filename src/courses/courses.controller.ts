import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
    constructor (private coursesService: CoursesService){}

    @Get()
    @ApiOkResponse({description: 'List of All Courses'})
    async getCourses() {
        const courses = await this.coursesService.getCourses();
        return courses;
    }

    @Get(':courseId')
    @ApiOkResponse({description: 'List of 1 Course'})
    async getCourse(@Param('courseId') courseId) {
        const course = await this.coursesService.getCourse(courseId);
        return course;
    }

    @Post()
    @ApiCreatedResponse({description: 'Added a Course'})
    async addCourse(@Body() createCourseDto: CreateCourseDto) {
        const course = await this.coursesService.addCourse(createCourseDto);
        return course;
    }

    @Delete()
    @ApiOkResponse({description: 'Remove a Course'})
    async deleteCourse(@Query() query) {
        const courses = await this.coursesService.deleteCourse(query.courseId);
        return courses;
    }
}
