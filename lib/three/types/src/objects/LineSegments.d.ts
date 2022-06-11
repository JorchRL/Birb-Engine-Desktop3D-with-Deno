/// <reference lib="DOM" /> 
import { Material } from './../materials/Material.d.ts';
import { Line } from './Line.d.ts';
import { BufferGeometry } from '../core/BufferGeometry.d.ts';

/**
 * @deprecated
 */
export const LineStrip: number;
/**
 * @deprecated
 */
export const LinePieces: number;

export class LineSegments<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Line<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial);

    /**
     * @default 'LineSegments'
     */
    type: 'LineSegments' | string;
    readonly isLineSegments: true;
}
