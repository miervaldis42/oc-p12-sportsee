/**
 * Class representing the user's activities.
 */
class Activities {
  /**
   * Creates the user's activities data.
   * @param   {Number}    data.userId               The user's id.
   * @param   {Object[]}  data.sessions             The user's session.
   * @param   {Number}    data.sessions[].day       Session day.
   * @param   {Number}    data.sessions[].kilogram  Session kilogram.
   * @param   {Number}    data.sessions[].calories  Session calories.
   */
  constructor(data) {
    this.activities = data.sessions ?? [];
  }
}

export default Activities;
