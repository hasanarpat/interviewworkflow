import { Stack } from "@mui/material";
import React, { useState } from "react";
import styles from "@/styles/newPage/forms/interviewQuesitons.module.scss";
import { useDispatch, useSelector } from "react-redux";
import AddQuestionButton from "./addQuestionButton/AddQuestionButton";
import QuestionBox from "./questionBox/QuestionBox";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Item } from "../ui/dragItem/Item";
import { rearrangeArray, reorderQuestions } from "@/redux/slices/formSlice";
import { useSearchParams } from "next/navigation";

const InterviewQuestions = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.id;

  const questions = useSelector((state) => state.form.questions);
  const [activeId, setActiveId] = useState(null);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   editIndexes();
  // }, [questions]);

  const editIndexes = (array) => {
    dispatch(
      reorderQuestions(
        array.map((value, index) => ({ ...value, id: index + 1 }))
      )
    );
  };
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  function handleDragStart(event) {
    const { active } = event;

    setActiveId(active.id);
  }
  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = questions.findIndex((item) => item.id === active.id);
      const newIndex = questions.findIndex((item) => item.id === over.id);
      editIndexes(arrayMove(questions, oldIndex, newIndex));
      // dispatch(reorderQuestions(arrayMove(questions, oldIndex, newIndex)));
    }
  }

  return (
    <div className={styles.container}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <Stack direction="column" spacing={2} className={styles.wrapper}>
          <SortableContext
            items={questions}
            strategy={verticalListSortingStrategy}
          >
            {questions.map((q) => (
              <QuestionBox q={q} key={q.id} />
            ))}
          </SortableContext>

          <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
          <AddQuestionButton />
        </Stack>
      </DndContext>
    </div>
  );
};

export default InterviewQuestions;
