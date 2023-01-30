import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Card = styled.div<{ isDragging: boolean }>`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isDragging ? '#74b9ff' : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? '0px 2px 5px rgba(0,0,0,0.1)' : 'none'};
`;

interface IDraggabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DraggabbleCard = ({ toDoId, toDoText, index }: IDraggabbleCardProps) => {
  return (
    <Draggable draggableId={toDoId+''} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};
export default React.memo(DraggabbleCard);
