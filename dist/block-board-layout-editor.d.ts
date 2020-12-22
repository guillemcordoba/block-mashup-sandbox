import { LitElement, TemplateResult, Constructor } from "lit-element";
import { SplitLayoutElement } from "@vaadin/vaadin-split-layout/vaadin-split-layout.js";
import { Block, BlockLayoutNode, BlockSlot } from "./types";
import { IconButton } from "scoped-material-components/mwc-icon-button";
import { BlockBoardSlot } from "./block-board-slot";
declare const BlockBoardLayoutEditor_base: Constructor<LitElement>;
export declare class BlockBoardLayoutEditor extends BlockBoardLayoutEditor_base {
    static styles: import("lit-element").CSSResult;
    private availableBlocks;
    blockLayout: BlockSlot;
    static get scopedElements(): {
        "block-board-slot": typeof BlockBoardSlot;
        "vaadin-split-layout": typeof SplitLayoutElement;
        "mwc-icon-button": typeof IconButton;
    };
    renderBlockSlot(blockName: string | undefined, parent?: {
        node: BlockLayoutNode;
        slotIndex: number;
    }, grandparent?: {
        node: BlockLayoutNode;
        slotIndex: number;
    }): TemplateResult;
    findBlock(blockName: string): Block | undefined;
    renderLayoutNode(blockLayout: BlockLayoutNode, parentNode?: {
        node: BlockLayoutNode;
        slotIndex: number;
    }): TemplateResult;
    render(): TemplateResult;
}
export {};