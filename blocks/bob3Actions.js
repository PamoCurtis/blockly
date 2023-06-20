/**
 * @fileoverview Action blocks for Bob3.
 * @requires Blockly.Blocks
 * @author Evgeniya
 */

'use strict';

goog.provide('Blockly.Blocks.bob3Actions');

goog.require('Blockly.Blocks');

Blockly.Blocks['bob3Actions_recall'] = {
    /**
     * 
     * @constructs bob3Actions_recall
     * @this.Blockly.Block
     * @returns immediately
     * @memberof Block
     */

    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.BOB3_RECALL_NUMBER);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.BOB3_READNUMBER_TOOLTIP);
    }
};

Blockly.Blocks['bob3Actions_remember'] = {
    /**
     * 
     * @constructs bob3Actions_remember
     * @this.Blockly.Block
     * @returns immediately
     * @memberof Block
     */

    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendValueInput('VALUE').appendField(Blockly.Msg.BOB3_REMEMBER_NUMBER).setCheck([ 'Number' ]);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.BOB3_SAVENUMBER_TOOLTIP);
    }
};
