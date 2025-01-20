// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
const getBootcamps = (req, res) => {
  res.status(200).json({ success: true, data: { msg: "show all bootcamps" } });
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
const getBootcamp = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ success: true, data: { msg: `show bootcamp ${id}` } });
};

// @desc      create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
const createBootcamp = (req, res) => {
  res.status(200).json({ success: true, data: { msg: "create a bootcamp" } });
};

// @desc      update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
const updateBootcamp = (req, res) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ success: true, data: { msg: `update bootcamp ${id}` } });
};

// @desc      delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
const deleteBootcamp = (req, res) => {
  const { id } = req.params;
  res
    .status(200)
    .json({ success: true, data: { msg: `delete bootcamp ${id}` } });
};

module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
};
