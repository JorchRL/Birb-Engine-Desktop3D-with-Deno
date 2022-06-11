/// <reference lib="DOM" /> 
import { WebGLRenderer, Vector2 } from '../../../src/Three.d.ts';

import { SelectionBox } from './SelectionBox.d.ts';

export class SelectionHelper {
    constructor(selectionBox: SelectionBox, renderer: WebGLRenderer, cssClassName: string);
    element: HTMLElement;
    isDown: boolean;
    pointBottomRight: Vector2;
    pointTopLeft: Vector2;
    renderer: WebGLRenderer;
    startPoint: Vector2;

    onSelectStart(event: Event): void;
    onSelectMove(event: Event): void;
    onSelectOver(event: Event): void;
}
