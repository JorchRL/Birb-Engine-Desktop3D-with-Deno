import { Loader } from './Loader.d.ts';
import { LoadingManager } from './LoadingManager.d.ts';
import { Texture } from './../textures/Texture.d.ts';
import { Material } from './../materials/Material.d.ts';

export class MaterialLoader extends Loader {
    constructor(manager?: LoadingManager);

    /**
     * @default {}
     */
    textures: { [key: string]: Texture };

    load(
        url: string,
        onLoad: (material: Material) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: Error | ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Material>;
    setTextures(textures: { [key: string]: Texture }): this;
    parse(json: any): Material;
}
