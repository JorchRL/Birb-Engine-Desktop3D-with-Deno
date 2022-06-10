import { Line } from './Line.d.ts';
import { Material } from './../materials/Material.d.ts';
import { BufferGeometry } from '../core/BufferGeometry.d.ts';

export class LineLoop<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Line<TGeometry, TMaterial> {
    constructor(geometry?: TGeometry, material?: TMaterial);

    type: 'LineLoop';
    readonly isLineLoop: true;
}
