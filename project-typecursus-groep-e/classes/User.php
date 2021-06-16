<?php


/**
 * Class User
 */
class User
{
    private $mysqli;

    /**
     * Page constructor.
     * @param $mysqli       mysqli object
     */
    public function __construct($mysqli) {
        if($mysqli instanceof mysqli) {
            $this->mysqli = $mysqli;
        } else {
            trigger_error("Myslqi object expected", E_USER_ERROR);
        }
    }

    /**
     * @param $idUser       number with page id
     * @return array        array with page data
     */
    public function getUser($idUser) {

        if(is_numeric($idUser)) {
            $sql = "SELECT iduser, name FROM user WHERE iduser=" . $this->mysqli->real_escape_string($idUser) . ";";
            if ($result = $this->mysqli->query($sql)) {
                return $result->fetch_assoc();
            }
        } else {
            trigger_error("Number expected", E_USER_ERROR);
        }
    }

    /**
     * @param $arr      array with all fields page table
     * @return boolean
     */
    public function setUser($arr) {

        if(is_numeric($arr['idUser']) && $arr['name']!='' && $arr['password']!='') {
            //TODO: NIET VEILIG het wachtwoord wordt nu niet beveiligd opgeslagen
            $sql = "
                UPDATE user
                SET name='" . $this->mysqli->real_escape_string($arr['name']) . "',
                password='" . $this->mysqli->real_escape_string($arr['password']) . "', 
                WHERE iduser=" . $this->mysqli->real_escape_string($arr['iduser']) . ";
            ";
            return $result = $this->mysqli->query($sql);
        } else {
            trigger_error("Number expected", E_USER_ERROR);
        }
    }

    /**
     * Find out if combination user and password exist in the user table
     * @param $name
     * @param $password
     * @return bool
     */
    public function validUser($name, $password){
        // TODO: controleren of de combinatie naam en wachtwoord voorkomt in user tabel
        return true;
    }
}


