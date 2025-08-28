"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import {
  ReactFlow,
  Node as RFNode,
  Edge as RFEdge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  NodeProps,
  NodeTypes,
  Position,
  Handle,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Image from "next/image";

// Custom node component that renders skeumorphic images
const AutomationNode: React.FC<NodeProps> = ({ data, id }) => {
  const nodeData = data as {
    title?: string;
    subtitle?: string;
    baseImage?: string;
    width?: number;
    height?: number;
  };

  return (
    <div
      className="relative"
      style={{ width: nodeData.width || 120, height: nodeData.height || 120 }}
    >
      <Handle
        type="source"
        position={Position.Right}
        id="r"
        className="opacity-0"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="l"
        className="opacity-0"
      />
      <Image
        src={nodeData.baseImage || ""}
        alt={nodeData.title || "Automation Node"}
        className={`w-full h-full object-contain`}
        width={1000}
        height={1000}
      />

      {(nodeData.title || nodeData.subtitle) && (
        <div
          className="absolute -bottom-5 text-shadow-2xs left-1/2 -translate-x-1/2 text-center pr-6"
          id={id as string}
        >
          {nodeData.title && (
            <div className="text-sm font-medium text-black drop-shadow-md whitespace-nowrap">
              {nodeData.title}
            </div>
          )}
          {nodeData.subtitle && (
            <div className="text-xs text-gray-500/80 drop-shadow-md whitespace-nowrap">
              {nodeData.subtitle}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const nodeTypes: NodeTypes = {
  automationNode: AutomationNode,
};

interface Props {
  flow: {
    id: string;
    title: string;
    description?: string;
    nodes: RFNode[];
    edges: RFEdge[];
    metadata?: {
      category?: string;
      complexity?: string;
      tags?: string[];
    };
  };
  className?: string;
  scale?: number;
  interactive?: boolean;
  showConnectionPoints?: boolean;
  animated?: boolean;
}

const FlowDiagram: React.FC<Props> = ({
  flow,
  className = "",
  scale = 1,
  interactive = true,
  showConnectionPoints = false,
  animated = true,
}) => {

  const [nodes, setNodes, onNodesChange] = useNodesState<RFNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<RFEdge>([]);

  useEffect(() => {
    setNodes(flow.nodes);
    setEdges(flow.edges);
  }, [flow.nodes, flow.edges]);

  return (
    <div
      className={`relative border border-muted rounded-xl mx-auto ${className}`}
      style={{ width: "100%" }}
    >
      <div className={`relative w-full h-[420px] md:h-[560px] rounded-xl overflow-hidden ${className}`}>
        <ReactFlow<RFNode, RFEdge>
          key={flow.id}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView={scale === 1}
          nodesDraggable={interactive}
          nodesConnectable={false}
          maxZoom={scale > 1 ? 3 : 1.5}
          elementsSelectable={interactive}
          attributionPosition="bottom-left"
          preventScrolling={false}
          draggable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          // disable panning/dragging the viewport
          onScroll={(e) => {
            e.preventDefault();

          }}
          onDrag={(e) => {
            e.preventDefault();
          }}
          panOnScroll={false}
          panOnDrag={true}
          style={{
            backgroundColor: "#E6ECF0",
          }}
        ></ReactFlow>
      </div>
    </div>
  );
};

export default FlowDiagram;
