import { TopBar } from "./TopBar/TopBar.js";
import { LeftBar } from "./LeftBar/LeftBar.js";
import { Stage } from "./Stage/Stage.js";
import { LeftPanel } from "./LeftPanel/LeftPanel.js";
import { FloatingPanel } from "./FloatingPanel/FloatingPanel.js";
import { sectionActions } from "./sectionActions/sectionActions.js";
import { AddSection } from "./AddSection/AddSection.js";
import { GridLines } from "./Gridlines/Gridlines.js";
import { Gfpp } from "./GFPP/gfpp.js";
import { selectionModel } from "./SelectionModel/SelectionModel.js";
import { Resizable } from "./Resize/Resize.js";
import { DragNDropElements } from "./dragNDropElements/dragNDropElements.js";

export const modules = (state, setState) => {
  TopBar(state, setState);
  LeftBar(state, setState);
  LeftPanel(state, setState);
  Stage(state, setState);
  FloatingPanel(state, setState);
  Resizable(state, setState);
  selectionModel(state, setState);
  Gfpp(state, setState);
  sectionActions(state, setState);
  DragNDropElements(state, setState);
  AddSection(state, setState);
  GridLines(state, setState);
};
