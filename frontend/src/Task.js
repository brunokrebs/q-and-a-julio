import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaCaretDown } from "react-icons/fa";
import { useUpdateTask } from "./api/api.hooks";
import { openMenuAtom } from "./atoms";

const badgeStyle = {
  backgroundColor: "black",
  color: "white",
  display: "inline-block",
  textAlign: "center",
  width: "20px",
  height: "20px",
  marginRight: "10px",
  fontSize: "10px",
  borderRadius: "25%",
};

export const Task = ({ task, deleteTask }) => {
  const MenuButton = () => {
    const [openMenu, setOpenMenu] = useAtom(openMenuAtom);
    const openMenuButton = useRef(null);

    const menuButtonStyle = {
      display: "flex",
      backgroundColor: "darkslategrey",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer", // reference: https://stackoverflow.com/questions/3087975/how-to-change-the-cursor-into-a-hand-when-a-user-hovers-over-a-list-item
      borderRadius: "8px",
    };

    const openMenuButtonStyle = {
      paddingRight: "15px",
      position: "relative",
    };

    const deleteItemButtonStyle = {
      paddingLeft: "15px",
      paddingRight: "15px",
    };

    const superMenu = {
      position: "fixed",
      backgroundColor: "white",
      padding: "15px",
      borderRadius: "8px",
      cursor: "pointer",
    };

    const MenuModal = () => {
      const buttonClicked = openMenuButton.current;
      // console.log("- buttonClicked", buttonClicked.getBoundingClientRect());
      const buttonPosition = buttonClicked.getBoundingClientRect();
      const [position, setPosition] = useState({
        top: buttonPosition.top + 50,
        left: buttonPosition.left - 79,
      });

      const updateTask = useUpdateTask();

      useEffect(() => {
        window.addEventListener("resize", () => {
          const buttonPosition = buttonClicked.getBoundingClientRect();
          setPosition({
            top: buttonPosition.top + 50,
            left: buttonPosition.left - 79,
          });
        });
      }, []);

      return createPortal(
        <div
          style={{
            ...superMenu,
            ...position,
          }}
          onClick={() => {
            updateTask.mutate({ ...task, archived: !task.archived });
          }}
        >
          Toggle active/inactive
        </div>,
        document.body
      );
    };

    return (
      <>
        <div style={menuButtonStyle} ref={openMenuButton}>
          <div
            style={deleteItemButtonStyle}
            onClick={() => {
              deleteTask(task);
            }}
          >
            Delete
          </div>
          <div
            style={openMenuButtonStyle}
            onClick={() => {
              setOpenMenu(task);
            }}
          >
            <FaCaretDown />
          </div>
        </div>
        {openMenu && openMenu.id === task.id && openMenuButton.current && (
          <MenuModal />
        )}
      </>
    );
  };
  return (
    <div className="bg-gray-500 text-white p-4 rounded-md drop-shadow-lg flex justify-between">
      <div className="text-lg">
        <span className="block text-sm text-gray-800">Task Description</span>
        <div style={{ textDecoration: task.archived ? "line-through" : "" }}>
          <small style={badgeStyle}>{task.effort || 0}</small>
          {task.title}
        </div>
      </div>
      <div className="flex items-stretch">
        {/* <Button
          action={() => {
            deleteTask(task);
          }}
        >
          <FaTrashAlt />
        </Button> */}
        <MenuButton task={task} deleteTask={deleteTask} />
      </div>
    </div>
  );
};
