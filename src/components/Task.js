import './task.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton, ButtonGroup  } from '@mui/material'

export default function Task ({ task, handleToggle, handleDelete, handleChange }) {

    const handleTogClick = e => {
        e.preventDefault()
        handleToggle(e.currentTarget.id, task)
    }

    const handleDelClick = e => {
        e.preventDefault()
        handleDelete(e.currentTarget.id)
    }

    return (
        <div id={task.id} key="task"
        className="todo">
            <span className={
                task.complete
                ? "todo-content complete"
                : "todo-content"}
                key="task-content"
                id={task.id}
                contentEditable="true"
                value={task.task}
                onBlur={handleChange}>
                {task.task}
            </span>
            <ButtonGroup className='todo-actions' key="task-actions">
                {/* check button */}

                    {task.complete
                    ?   <IconButton
                            aria-label="check"
                            id={task.id}
                            onClick={handleTogClick}>
                            <CheckCircleOutlineIcon className='todo-btn check-btn' />
                        </IconButton>
                    :   <IconButton
                            aria-label="check"
                            id={task.id}
                            onClick={handleTogClick}>
                            <CircleOutlinedIcon className='todo-btn check-btn' />
                        </IconButton>}

                {/* delete button */}
                <IconButton
                    aria-label="check"
                    id={task.id}
                    onClick={handleDelClick}>
                    <RemoveCircleIcon className='todo-btn delete-btn' />
                </IconButton>
            </ButtonGroup>

        </div>
    )
}
