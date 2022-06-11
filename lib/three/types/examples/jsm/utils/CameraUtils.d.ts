/// <reference lib="DOM" /> 
import { PerspectiveCamera, Vector3 } from '../../../src/Three.js.d.ts';

export namespace CameraUtils {
    function frameCorners(
        camera: PerspectiveCamera,
        bottomLeftCorner: Vector3,
        bottomRightCorner: Vector3,
        topLeftCorner: Vector3,
        estimateViewFrustum?: boolean,
    ): void;
}
