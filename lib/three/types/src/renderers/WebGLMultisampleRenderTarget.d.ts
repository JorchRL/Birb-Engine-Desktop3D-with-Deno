/// <reference lib="DOM" /> 
import { WebGLRenderTarget } from './WebGLRenderTarget.d.ts';

/**
 * @deprecated THREE.WebGLMultisampleRenderTarget has been removed. Use a normal {@link WebGLRenderTarget render target} and set the "samples" property to greater 0 to enable multisampling.
 */
export class WebGLMultisampleRenderTarget extends WebGLRenderTarget {}
