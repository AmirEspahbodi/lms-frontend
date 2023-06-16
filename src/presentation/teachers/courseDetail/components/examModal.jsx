export default function ExamModal({
  closeCreateExamModal,
  createExamModalTop,
}) {
  return (
    <div
      className="course-detail-top-item-modal"
      style={{ top: `${createExamModalTop}%` }}
    >
      <div className="modal-container">
        <div className="modal-close" onClick={closeCreateExamModal}></div>
      </div>
    </div>
  );
}
