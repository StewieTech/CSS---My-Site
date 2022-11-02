import unittest

from unique import num_to_dict

class TestCase(unittest.TestCase):

    def test_1(self):
        """Failed test 1"""
        self.assertEqual(num_to_dict([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}])

    def test_2(self):
        """Failed test 2"""
        self.assertEqual(num_to_dict([101,121,110,113,113,103]),[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}])

    def test_3(self):
        """Failed test 2"""
        self.assertEqual(num_to_dict([118,103,110,109,104,106]),[{"118":"v"},{"103":"g"},{"110":"n"},{"109":"m"},{"104":"h"},{"106":"j"}])


# Test.assert_equals(num_to_dict([107,99,110,107,118,106,112,102]),[{"107":"k"},{"99":"c"},{"110":"n"},{"107":"k"},{"118":"v"},{"106":"j"},{"112":"p"},{"102":"f"}])
# Test.assert_equals(num_to_dict([100,100,116,105,117,121 ]),[{"100":"d"},{"100":"d"},{"116":"t"},{"105":"i"},{"117":"u"},{"121":"y"}])
# Mubashir


if __name__ == '__main__':
    unittest.main()