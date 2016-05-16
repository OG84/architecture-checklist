import { Injectable } from '@angular/core';
import { CheckItem } from './check-item';

export class ChecklistService {
    constructor() {

    }

    getCheckItems(): Array<CheckItem> {
        return [
            {
                title: 'Dependecy Management',
                infos: [
                    'do not rely on libraries or tools that are (or not) part of the execution environment',
                    'better pull all deps at build time',
                    'use a dependency management framework'
                ]
            }
        ];
    }
}