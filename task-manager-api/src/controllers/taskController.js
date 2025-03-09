const tasks = []; // Mảng giả lập để lưu trữ công việc

// Lấy danh sách công việc
exports.getTasks = (req, res) => {
    res.json(tasks);
};

// Thêm công việc mới
exports.createTask = (req, res) => {
    const newTask = { id: tasks.length + 1, ...req.body };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Cập nhật công việc
exports.updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (!task) return res.status(404).send('Task not found');

    Object.assign(task, req.body);
    res.json(task);
};

// Xóa công việc
exports.deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return res.status(404).send('Task not found');

    tasks.splice(taskIndex, 1);
    res.status(204).send();
};